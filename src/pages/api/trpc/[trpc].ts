import { createContext } from "@src/server/context";
import { appRouter } from "@src/server/route";
import * as trpcNext from "@trpc/server/adapters/next";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR")
      console.error("予期せぬエラーがおきました", error);
    else console.error(error);
  },
});
