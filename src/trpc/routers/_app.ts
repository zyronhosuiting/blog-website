import { createTRPCRouter } from "../init";
import { articleRouter } from "./article";
import { tagRouter } from "./tag";

// baseProcedure is a base public procedure
export const appRouter = createTRPCRouter({
  article: articleRouter,
  tag: tagRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
