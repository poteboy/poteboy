import type { NextPage, GetStaticProps } from "next";
import {
  Box,
  Container,
  Spacer,
  Text,
  Divider,
  HStack,
  Card,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import { colors } from "@src/styles";
import { Header, PageMeta } from "@src/components";
import Link from "next/link";
import { dynamicPaths } from "@src/constants";
import { Post, getAllPosts } from "@src/utils";
import { blogPostSchema, BlogPost } from "@src/schema";
import { usePushHistory } from "@src/hooks";
import { adminDB, fbCollectionKeys, Timestamp } from "@src/server/admin";

type Props = {
  posts: Post[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  usePushHistory();
  return (
    <Box bg={colors.baseBg} minH="100vh">
      <PageMeta title="Blog | Poteboy" />
      <Header />
      <Spacer h={4} />
      <Container>
        <Text variant="heading" as="h1">
          Blog
        </Text>
        <Spacer h={4} />
        {posts.map((p, index) => {
          return (
            <Link key={p.slug} {...dynamicPaths.post({ id: p.slug })}>
              {index === 0 && <Divider />}
              <Box as="article" padding="1rem">
                <HStack spacing={4}>
                  <Card padding={3} bg={colors.baseBgLight}>
                    <Text
                      as="span"
                      role="presentation"
                      fontSize="32px"
                      lineHeight="32px"
                    >
                      {p.data.icon}
                    </Text>
                  </Card>
                  <VStack align="start">
                    <Text as="h2" variant="label">
                      {p.data.title}
                    </Text>
                    <Text
                      as="time"
                      variant="caption"
                      color={colors.baseTextLight}
                    >
                      {p.data.date}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
              <Divider />
            </Link>
          );
        })}
      </Container>
    </Box>
  );
};

// あったらアップデート、なかったら作る
export const getStaticProps: GetStaticProps<Props> = async () => {
  const post = getAllPosts();
  try {
    const snap = await adminDB.collection(fbCollectionKeys.blogPost).get();

    const item = snap.docs
      .map((d: any) => {
        const result = blogPostSchema.safeParse(d.data());
        if (result.success) return result.data;
      })
      .filter((item: BlogPost | undefined) => !!item) as BlogPost[];

    await adminDB.runTransaction(async (transaction) => {
      post.forEach((post) => {
        const _i = item.find((i) => i.slug === post.slug);
        const blogPost: BlogPost = {
          ...post,
          readCount: _i?.readCount ?? 0,
          likeCount: _i?.likeCount ?? 0,
          createdAt:
            _i?.createdAt ?? Timestamp.fromDate(new Date(post.data.date)),
          updatedAt:
            _i?.updatedAt ?? Timestamp.fromDate(new Date(post.data.date)),
        };
        transaction.set(
          adminDB.collection(fbCollectionKeys.blogPost).doc(post.slug),
          blogPost,
          { merge: true }
        );
      });
    });
  } catch {}

  return {
    props: {
      posts: post.filter((p) => p.data.isPublic),
    },
  };
};

export default Blog;
