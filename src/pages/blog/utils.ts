import fs from "fs";
import matter from "gray-matter";
import { z } from "zod";
import { blogPostSchema, BlogPost } from "@src/schema";

export const postSchema = z.object({
  content: z.string(),
  data: z.object({
    date: z.string(),
    title: z.string(),
    icon: z.string(),
  }),
  slug: z.string(),
});

export type Post = z.infer<typeof postSchema>;

const path = "src/posts";
export const getAllSlugs = () => {
  const posts: any = [];
  const files = fs.readdirSync(path);
  return files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const file = fs.readFileSync(`${path}/${fileName}`, "utf-8");
    return slug;
  });
};

export const getPostBySlug = (slug: string): Post => {
  const file = fs.readFileSync(`${path}/${slug}.md`, "utf-8");
  //   return { ...matter(file), slug } as any as Post; // typeof Post
  try {
    return postSchema.parse({ ...matter(file), slug });
  } catch (e) {
    throw Error(JSON.stringify(e));
  }
};

// if retured as plain object, it throws this error: `object` ("[object Uint8Array]") cannot be serialized as JSON.
export const getAllPosts = () => {
  //   return JSON.stringify(getAllSlugs().map((slug) => getPostBySlug(slug)));
  return getAllSlugs().map((slug) => getPostBySlug(slug));
};

export const createBlogPost = (blogPost: BlogPost[]) => {};
