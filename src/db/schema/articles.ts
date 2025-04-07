import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helper";
import { users } from "./users";
import { media } from "./media";
import { ARTICLE_STATUS } from "@/constant/article";

export const articleStatusEnum = pgEnum("status", [
  ARTICLE_STATUS.DRAFT,
  ARTICLE_STATUS.PUBLISHED,
  ARTICLE_STATUS.HIDDEN,
]);

export const articles = pgTable("articles", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: text("title").notNull(),
  description: text("description"),
  content: text("content").notNull(),
  status: articleStatusEnum().default(ARTICLE_STATUS.DRAFT).notNull(), // Default to draft
  publishedDate: timestamp().defaultNow().notNull(), // allow pre-publishing
  authorId: uuid("author_id")
    .notNull()
    .references(() => users.id), // Foreign key to users
  coverMediaId: integer("cover_media_id").references(() => media.id), // Foreign key to media
  ...timestamps,
});
