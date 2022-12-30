import { z } from "zod";
import { postSchema } from "@src/utils";
import { Timestamp as AdminStamp } from "firebase-admin/firestore";

export const blogPostSchema = postSchema.merge(
  z.object({
    readCount: z.number(),
    likeCount: z.number(),
    createdAt: z.instanceof(AdminStamp),
    updatedAt: z.instanceof(AdminStamp),
  })
);

export type BlogPost = z.infer<typeof blogPostSchema>;
