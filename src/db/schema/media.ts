import { integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helper";

export enum MEDIA_TYPE {
  IMAGE = "image",
  VIDEO = "video",
}

export const mediaTypeEnum = pgEnum("type", [
  MEDIA_TYPE.IMAGE,
  MEDIA_TYPE.VIDEO,
]);

export const media = pgTable("media", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  url: text("url").notNull(), // aws s3 url or remote url
  type: mediaTypeEnum(),
  ...timestamps,
});
