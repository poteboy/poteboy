import { createRouter } from "../router";
import { uesrRouter } from "./user.router";

export const appRouter = createRouter().merge("users.", uesrRouter);

export type AppRouter = typeof appRouter;
