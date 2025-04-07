import { timestamp } from "drizzle-orm/pg-core";

// columns.helpers.ts
export const timestamps = {
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
  deletedAt: timestamp(),
};
