import { generateOgImage } from "@/lib/generateOG";
import { allPosts } from "contentlayer/generated";

export async function generateStaticParams() {
  return allPosts
    .filter((p) => p.published)
    .map((post) => ({
      slug: post._raw.flattenedPath,
    }));
}

const handler = async (
  _: unknown,
  { params }: { params: { slug: string } }
) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  if (!post) {
    return;
  }

  return generateOgImage({
    title: post.title,
  });
};

export { handler as GET };
