import { router } from "@trpc/server";
import { Context } from "./context";

import SuperJSON from "superjson";
export function createRouter() {
  return router<Context>().transformer(SuperJSON);
}
