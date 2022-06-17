import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '@src/entities';

const path = 'src/posts/tech';
export const getAllSlugs = () => {
  const posts: any = [];
  const files = fs.readdirSync(path);
  return files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const file = fs.readFileSync(`${path}/${fileName}`, 'utf-8');
    return slug;
  });
};

const getPostBySlug = (slug: string) => {
  const file = fs.readFileSync(`${path}/${slug}.md`, 'utf-8');
  return { ...matter(file), slug }; // typeof Post
};

// if retured as plain object, it throws this error: `object` ("[object Uint8Array]") cannot be serialized as JSON.
export const getAllPosts = () => {
  return JSON.stringify(getAllSlugs().map((slug) => getPostBySlug(slug)));
};
