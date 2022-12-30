import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { Post, getAllSlugs, getPostBySlug } from "../../utils/blog";
import {
  Box,
  Card,
  Container,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import { colors } from "@src/styles";
import { Header, PageMeta, Markdown } from "@src/components";
import { useQuery, useMutation } from "@src/utils";
import { useCallback, useMemo, useReducer, useState } from "react";
import { usePushHistory } from "@src/hooks";
import { PeachIcon } from "@src/Icons";
import Twitter from "@src/public/twitter.png";
import { useRouter } from "next/router";

const PostPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  const [finished, updateFinished] = useReducer(() => true, false);
  const [isLiked, updateLiked] = useReducer(() => true, false);
  usePushHistory();
  const { mutate } = useMutation(["blogs.update-blog-post"], {
    onSuccess(e) {
      refetch();
    },
  });
  const { data, isError, isLoading, refetch } = useQuery(
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

  const [peachScale, setPeachScalse] = useState(1);
  const handleLGTM = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      mutate({
        slug: post.slug,
        likeCount: !!data?.likeCount ? data.likeCount + 1 : 1,
      });
      updateLiked();
    },
    [data, mutate, post]
  );
  const router = useRouter();
  const twitterLink = useMemo(() => {
    const baseUrl = "https://twitter.com/intent/tweet?";
    const text = ["text", post.data.title + " | poteboy"];
    const via = ["via", "_poteboy_"];
    const url = ["url", `https://poteboy.com${router.asPath}`];

    const query = new URLSearchParams([text, via, url]).toString();
    return `${baseUrl}${query}`;
  }, [post, router]);

  return (
    <Box bg={colors.baseBg} minH="100vh">
      <PageMeta title={`${post.data.title} | Poteboy`} />
      <Header />
      <Box as="main" m="auto" textAlign="center">
        <Spacer h={8} />
        <Box animation={animation(0)}>
          <Text as="h1" variant="heading" padding="0px 20px">
            {post.data.title}
          </Text>
          <Spacer h={2} />
          <Text as="time" color={colors.baseTextLight}>
            Posted on {post.data.date}
          </Text>
          <Spacer h={2} />
          <Text>{isLoading ? "--" : data?.readCount ?? 0} views</Text>
        </Box>
        <Spacer h={4} />
        <Container
          textAlign="start"
          pos="relative"
          padding={4}
          borderRadius={10}
          opacity={0}
          animation={animation(0.2)}
        >
          <Markdown content={post.content} />
          <Spacer h={10} />
          <HStack align="flex-start" spacing={4} justify="center">
            <VStack spacing={1}>
              <Card
                padding="8px 12px"
                flexDir="row"
                align="center"
                as="button"
                transform={`scale(${peachScale})`}
                // 桃アイコンの色の薄い部分
                bg={isLiked ? "#ff886c70" : colors.baseBgLight}
                onClick={handleLGTM}
                onMouseDown={() => setPeachScalse(0.9)}
                onMouseUp={() => setPeachScalse(1)}
                onKeyDown={(e) => e.key === "Enter" && setPeachScalse(0.9)}
                onKeyUp={(e) => e.key === "Enter" && setPeachScalse(1)}
              >
                <PeachIcon width={28} height={28} />
                <Text ml={2} whiteSpace="nowrap">
                  いいね
                </Text>
              </Card>
              <Text
                variant="caption"
                as="span"
                // 桃アイコンの1番色が濃い部分
                color={isLiked ? "#e5474f" : colors.baseText}
              >
                {data?.likeCount ?? 0}
              </Text>
            </VStack>
            <Card
              padding="8px 12px"
              flexDir="row"
              align="center"
              as="a"
              bg={colors.baseBgLight}
              href={twitterLink}
              target="_blank"
            >
              <Image
                src={Twitter}
                alt="twitter logo"
                height={7}
                color="white"
              />
              <Text ml={2} whiteSpace="nowrap">
                ツイート
              </Text>
            </Card>
          </HStack>
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

const FadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
const animation = (delay: number) => `${FadeInUp} 0.4s forwards ${delay}s`;
