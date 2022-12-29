import { createRouter } from "../router";
import { blogPostSchema } from "@src/schema";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import * as t from "@trpc/server";
import { z } from "zod";
import {
  firebase,
  getDoc,
  fbCollectionKeys,
  setDoc,
  query,
  collection,
  firestore,
  doc,
  runTransaction,
} from "@src/utils";

export const blogRouter = createRouter().query("get-blog-post", {
  input: z.string(),
  resolve: async ({ ctx, input }) => {
    try {
      const d: any = await getDoc(
        doc(firestore, fbCollectionKeys.blogPost, input)
      );
      const result = blogPostSchema.safeParse(d.data());
      if (result.success) return result.data;
    } catch (e) {
      console.error(e);
      throw Error("予期せぬエラーが起きました");
    }
  },
});
