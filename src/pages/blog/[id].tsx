import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { Post, getAllSlugs, getPostBySlug } from "../../utils/blog";
import { Box } from "@chakra-ui/react";
import { colors } from "@src/styles";
import { Header, PageMeta } from "@src/components";
import {
  useQuery,
  getDoc,
  fbCollectionKeys,
  doc,
  firestore,
  useMutation,
} from "@src/utils";
import { useEffect } from "react";

const PostPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  const { mutate } = useMutation(["blogs.update-blog-post"]);
  const { data, isError, isLoading } = useQuery(
    ["blogs.get-blog-post", post.slug],
    {
      onSuccess(data) {
        return mutate({
          slug: post.slug,
          readCount: !!data?.readCount ? data.readCount + 1 : 1,
        });
      },
    }
  );

  return (
    <Box bg={colors.baseBg} minH="100vh">
      <PageMeta title={`${post.data.title} | Poteboy`} />
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
