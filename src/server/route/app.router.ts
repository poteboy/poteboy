import { createRouter } from "../router";
import { uesrRouter } from "./user.router";
import { blogRouter } from "./blog.router";

export const appRouter = createRouter()
  .merge("users.", uesrRouter)
  .merge("blogs.", blogRouter);

export type AppRouter = typeof appRouter;
