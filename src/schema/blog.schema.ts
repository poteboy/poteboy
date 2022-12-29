import { z } from "zod";
import { postSchema } from "@src/utils";
import { Timestamp } from "firebase/firestore";

export const blogPostSchema = postSchema.merge(
  z.object({
    readCount: z.number(),
    likeCount: z.number(),
    createdAt: z.instanceof(Timestamp),
    updatedAt: z.instanceof(Timestamp),
  })
);

export type BlogPost = z.infer<typeof blogPostSchema>;
