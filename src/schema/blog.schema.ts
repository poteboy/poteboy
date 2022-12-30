import { z } from "zod";
import { postSchema } from "@src/utils";
import { Timestamp } from "firebase/firestore";
import { Timestamp as AdminStamp } from "firebase-admin/firestore";

export const blogPostSchema = postSchema.merge(
  z.object({
    readCount: z.number(),
    likeCount: z.number(),
    createdAt: z.instanceof(Timestamp).or(z.instanceof(AdminStamp)),
    updatedAt: z.instanceof(Timestamp).or(z.instanceof(AdminStamp)),
  })
);

export type BlogPost = z.infer<typeof blogPostSchema>;
