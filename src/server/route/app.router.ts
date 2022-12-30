import { createRouter } from "../router";
import { blogRouter } from "./blog.router";

export const appRouter = createRouter().merge("blogs.", blogRouter);

export type AppRouter = typeof appRouter;
