import { Category, isCategory, pickCategoryColor } from "@/lib/category";
import { Box, css, Heading, HStack, Spacer, Text, VStack } from "@kuma-ui/core";
import { allPosts, type Post } from "contentlayer/generated";
import Link from "next/link";

export default function Posts() {
  return (
    <Box>
      <Spacer size={40} />
      <Heading as="h1" fontSize={22} fontWeight={500}>
        投稿 一覧
      </Heading>
      <Spacer size={20} />
      {allPosts
        .filter((p) => p.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => {
          return <PostCard key={post._id} {...post} />;
        })}
    </Box>
  );
}

const PostCard = (post: Post) => {
  const category: Category = isCategory(post.category)
    ? post.category
    : "diary";

  const formattedDate = new Date(post.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/posts/${post._raw.flattenedPath}`}
      style={{
        textDecoration: "none",
      }}
    >
      <HStack as="article" padding="1.5rem 2rem" alignItems="center" gap={16}>
        <HStack
          role="presentation"
          fontSize="1.6rem"
          bg="#eff7ff"
          borderRadius={16}
          justify="center"
          alignItems="center"
          border="1px solid rgb(200 200 200 / 20%)"
          className={css`
            width: 3.6rem;
            height: 3.6rem;
            @media screen and (max-width: 576px) {
              width: 2rem;
              height: 2rem;
            }
          `}
        >
          {post.emoji}
        </HStack>
        <VStack gap={4}>
          <Heading as="h2" fontSize="1.5em" fontWeight={500} color="black">
            {post.title}
          </Heading>
          <HStack gap={16} alignItems="center">
            <Text
              as="time"
              fontSize="12px"
              color="rgba(0,0,0,.6)"
              dateTime={new Date(post.date).toISOString()}
            >
              {formattedDate}
            </Text>
            <Text
              as="span"
              aria-label="category"
              fontSize="12px"
              paddingX={6}
              paddingY={2}
              borderRadius={8}
              style={{
                backgroundColor: pickCategoryColor(category),
                color: "white",
              }}
            >
              {category}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Link>
  );
};
