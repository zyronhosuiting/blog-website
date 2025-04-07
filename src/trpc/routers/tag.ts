import { db } from "@/db";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import { tags } from "@/db/schema";
import { eq, ilike } from "drizzle-orm";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const tagRouter = createTRPCRouter({
  // Get all tags
  getAll: baseProcedure.query(async () => {
    try {
      return await db.select().from(tags).orderBy(tags.name);
    } catch (error) {
      console.error("Error fetching tags:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch tags",
      });
    }
  }),

  // Search tags by name
  search: baseProcedure
    .input(
      z.object({
        query: z.string(),
        limit: z.number().min(1).max(50).default(10),
      })
    )
    .query(async ({ input }) => {
      try {
        const { query, limit } = input;
        return await db
          .select()
          .from(tags)
          .where(ilike(tags.name, `%${query}%`))
          .orderBy(tags.name)
          .limit(limit);
      } catch (error) {
        console.error("Error searching tags:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to search tags",
        });
      }
    }),

  // Create a new tag
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1, "Tag name is required"),
      })
    )
    .mutation(async ({ input }) => {
      try {
        // Check if tag already exists
        const existingTag = await db
          .select()
          .from(tags)
          .where(eq(tags.name, input.name))
          .limit(1);

        if (existingTag.length > 0) {
          return existingTag[0];
        }

        // Create new tag
        const [newTag] = await db
          .insert(tags)
          .values({
            name: input.name,
          })
          .returning();

        return newTag;
      } catch (error) {
        console.error("Error creating tag:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create tag",
        });
      }
    }),
}); 