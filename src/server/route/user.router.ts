import { createRouter } from "../router";
import { createUserSchema, createUserOutputSchema } from "@src/schema";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import * as t from "@trpc/server";

export const uesrRouter = createRouter().mutation("register-user", {
  input: createUserSchema,
  // output: createUserOutputSchema,
  resolve: async ({ ctx, input }) => {
    const { email, name } = input;
    try {
      const user = await ctx.prisma.default?.user.create({
        data: {
          email,
        },
      });
      return user;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === "P200P")
          throw new t.TRPCError({
            code: "CONFLICT",
            message: "既にユーザーは存在します",
          });
      }
      throw new t.TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "予期せぬエラーがおきました",
      });
    }
  },
});
