import { db } from "@/db";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import { articles, users, articlesTags, tags } from "@/db/schema";
import { eq, desc, sql, count, and } from "drizzle-orm";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { media } from "@/db/schema";
import { ARTICLE_STATUS } from "@/constant/article";

export const articleRouter = createTRPCRouter({
  getTopTags: baseProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(10).default(4),
      })
    )
    .query(async ({ input }) => {
      try {
        const { limit } = input;

        // Get tags with article counts
        const topTags = await db
          .select({
            id: tags.id,
            name: tags.name,
            count: count(articlesTags.articleId).as("articleCount"),
          })
          .from(articlesTags)
          .innerJoin(articles, eq(articlesTags.articleId, articles.id))
          .where(eq(articles.status, ARTICLE_STATUS.PUBLISHED))
          .innerJoin(tags, eq(articlesTags.tagId, tags.id))
          .groupBy(tags.id, tags.name)
          .orderBy(desc(sql`count(${articlesTags.articleId})`))
          .limit(limit);

        return topTags;
      } catch (error) {
        console.error("Error fetching top tags:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch top tags",
        });
      }
    }),

  getMany: baseProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(50).default(10),
        cursor: z.number().nullish(),
        tagId: z.number().optional(),
      })
    )
    .query(async ({ input }) => {
      try {
        const { limit, cursor, tagId } = input;

        let articlesData;

        if (tagId) {
          // Query with tag filter
          articlesData = await db
            .select({
              article: articles,
              media: {
                url: media.url,
                type: media.type,
              },
              author: {
                id: users.id,
                name: users.name,
              },
            })
            .from(articles)
            .innerJoin(articlesTags, eq(articles.id, articlesTags.articleId))
            .where(
              and(
                eq(articles.status, ARTICLE_STATUS.PUBLISHED),
                eq(articlesTags.tagId, tagId)
              )
            )
            .leftJoin(media, eq(articles.coverMediaId, media.id))
            .leftJoin(users, eq(articles.authorId, users.id))
            .orderBy(desc(articles.publishedDate))
            .limit(limit + 1)
            .offset(cursor || 0);
        } else {
          // Query without tag filter
          articlesData = await db
            .select({
              article: articles,
              media: {
                url: media.url,
                type: media.type,
              },
              author: {
                id: users.id,
                name: users.name,
              },
            })
            .from(articles)
            .where(eq(articles.status, ARTICLE_STATUS.PUBLISHED))
            .leftJoin(media, eq(articles.coverMediaId, media.id))
            .leftJoin(users, eq(articles.authorId, users.id))
            .orderBy(desc(articles.publishedDate))
            .limit(limit + 1)
            .offset(cursor || 0);
        }

        const hasNextPage = articlesData.length > limit;
        const articles_list = hasNextPage
          ? articlesData.slice(0, -1)
          : articlesData;

        return {
          items: articles_list,
          nextCursor: hasNextPage ? (cursor || 0) + limit : undefined,
        };
      } catch (error) {
        console.error("Error fetching articles:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),

  getById: baseProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      try {
        const articleData = await db
          .select({
            article: articles,
            media: {
              url: media.url,
              type: media.type,
            },
            author: {
              id: users.id,
              name: users.name,
            },
          })
          .from(articles)
          .leftJoin(media, eq(articles.coverMediaId, media.id))
          .leftJoin(users, eq(articles.authorId, users.id))
          .where(eq(articles.id, Number(input.id)))
          .limit(1);

        if (!articleData[0]) {
          return null;
        }

        // Get tags for this article
        const articleTags = await db
          .select({
            id: tags.id,
            name: tags.name,
          })
          .from(articlesTags)
          .innerJoin(tags, eq(articlesTags.tagId, tags.id))
          .where(eq(articlesTags.articleId, Number(input.id)));

        return {
          ...articleData[0],
          tags: articleTags,
        };
      } catch (error) {
        console.error("Error fetching article by ID:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().optional(),
        content: z.string().min(1, "Content is required"),
        status: z
          .enum([
            ARTICLE_STATUS.DRAFT,
            ARTICLE_STATUS.PUBLISHED,
            ARTICLE_STATUS.HIDDEN,
          ])
          .default(ARTICLE_STATUS.DRAFT),
        coverMediaId: z.number().optional().nullable(),
        publishedDate: z.date().optional(),
        tags: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        // Start a transaction to ensure all operations succeed or fail together
        return await db.transaction(async (tx) => {
          // 1. Create the article
          const [newArticle] = await tx
            .insert(articles)
            .values({
              title: input.title,
              description: input.description,
              content: input.content,
              status: input.status,
              authorId: "1",
              coverMediaId: input.coverMediaId || null,
              publishedDate: input.publishedDate || new Date(),
            })
            .returning();

          // 2. Process tags if provided
          if (input.tags && input.tags.length > 0) {
            // Get unique tag names
            const uniqueTagNames = [...new Set(input.tags)];

            // Process each tag
            const tagIds: number[] = [];

            for (const tagName of uniqueTagNames) {
              // Check if tag exists
              const existingTags = await tx
                .select()
                .from(tags)
                .where(eq(tags.name, tagName))
                .limit(1);

              let tagId: number;

              if (existingTags.length > 0) {
                // Use existing tag
                tagId = existingTags[0].id;
              } else {
                // Create new tag
                const [newTag] = await tx
                  .insert(tags)
                  .values({ name: tagName })
                  .returning();
                tagId = newTag.id;
              }

              tagIds.push(tagId);
            }

            // Create article-tag relationships
            if (tagIds.length > 0) {
              await tx.insert(articlesTags).values(
                tagIds.map((tagId) => ({
                  articleId: newArticle.id,
                  tagId,
                }))
              );
            }
          }

          return newArticle;
        });
      } catch (error) {
        console.error("Error creating article:", error);
        if (error instanceof TRPCError) {
          throw error;
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create article",
        });
      }
    }),
});
