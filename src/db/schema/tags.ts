import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helper";

export const tags = pgTable("tags", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull().unique(),
  ...timestamps,
});
