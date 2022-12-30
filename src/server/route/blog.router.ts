import { createRouter } from "../router";
import { blogPostSchema } from "@src/schema";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import * as t from "@trpc/server";
import { z } from "zod";
import { adminDB, fbCollectionKeys } from "../admin";

export const blogRouter = createRouter()
  .query("get-blog-post", {
    input: z.string(),
    resolve: async ({ ctx, input }) => {
      try {
        const data = await adminDB
          .collection(fbCollectionKeys.blogPost)
          .doc(input)
          .get();
        const raw = data.data();
        const result = blogPostSchema.safeParse(raw);
        if (result.success) return result.data;
      } catch (e) {
        console.error(e);
        throw Error("予期せぬエラーが起きました");
      }
    },
  })
  .mutation("update-blog-post", {
    input: blogPostSchema.partial(),
    resolve: async ({ input }) => {
      try {
        const slug = input.slug;
        if (!slug) throw Error("slugを入力してください");
        const result = await adminDB
          .collection(fbCollectionKeys.blogPost)
          .doc(slug)
          .set(input, { merge: true });
        return result;
      } catch (e) {
        console.error(e);
        throw Error("予期せぬエラーが起きました");
      }
    },
  });
