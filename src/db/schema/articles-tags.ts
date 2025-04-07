import { integer, pgTable } from "drizzle-orm/pg-core";
import { articles } from "./articles";
import { tags } from "./tags";
import { timestamps } from "../columns.helper";

export const articlesTags = pgTable("articles_tags", {
  articleId: integer("article_id")
    .notNull()
    .references(() => articles.id),
  tagId: integer("tag_id")
    .notNull()
    .references(() => tags.id),
  ...timestamps,
});
