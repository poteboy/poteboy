import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Post, getAllSlugs, getPostBySlug } from "./utils";
import { Box } from "@chakra-ui/react";
import { colors } from "@src/styles";
import { Header } from "@src/components";

const PostPage: NextPage = () => {
  return (
    <Box bg={colors.baseBg} minH="100vh">
      <Header />
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const slugs = getAllSlugs();
  const paths = slugs.map((slug) => ({ params: { id: slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async (
  context
) => {
  const id = context.params?.id as string;
  const post = getPostBySlug(id);
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export default PostPage;
