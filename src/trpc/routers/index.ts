import { createTRPCRouter } from "../init";
import { articleRouter } from "./article";
import { tagRouter } from "./tag";

export const appRouter = createTRPCRouter({
  article: articleRouter,
  tag: tagRouter,
});

export type AppRouter = typeof appRouter;
