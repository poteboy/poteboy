import { createReactQueryHooks } from "@trpc/react";
import { AppRouter } from "@src/server/route";

export const trpc = createReactQueryHooks<AppRouter>();
