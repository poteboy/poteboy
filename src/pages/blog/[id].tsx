import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { Post, getAllSlugs, getPostBySlug } from "../../utils/blog";
import { Box, Container, Spacer, Text } from "@chakra-ui/react";
import { colors } from "@src/styles";
import { Header, PageMeta, Markdown } from "@src/components";
import { useQuery, useMutation } from "@src/utils";
import { useReducer } from "react";
import { usePushHistory } from "@src/hooks";

const PostPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  const [finished, updateFinished] = useReducer(() => true, false);
  usePushHistory();
  const { mutate } = useMutation(["blogs.update-blog-post"], {
    onSuccess(e) {},
  });
  const { data, isError, isLoading } = useQuery(
    ["blogs.get-blog-post", post.slug],
    {
      onSuccess(data) {
        if (!finished) {
          mutate({
            slug: post.slug,
            readCount: !!data?.readCount ? data.readCount + 1 : 1,
          });
        }
        updateFinished();
      },
    }
  );

  return (
    <Box bg={colors.baseBg} minH="100vh">
      <PageMeta title={`${post.data.title} | Poteboy`} />
      <Header />
      <Box as="main" m="auto" textAlign="center">
        <Spacer h={8} />
        <Text as="h1" variant="heading" padding="0px 20px">
          {post.data.title}
        </Text>
        <Spacer h={2} />
        <Text as="time" color={colors.baseTextLight}>
          Posted on {post.data.date}
        </Text>
        <Spacer h={2} />
        <Text>{data?.readCount ?? 0} views</Text>

        <Spacer h={4} />
        <Container
          textAlign="start"
          // bg={colors.baseBgLight}
          padding={4}
          borderRadius={10}
        >
          <Markdown content={post.content} />
        </Container>
      </Box>
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
