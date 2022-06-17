import type { NextPage, GetStaticProps } from 'next';
import { Footer, Header, PostCard } from '@src/components';
import { HStack, VStack } from '@chakra-ui/react';
import { getAllPosts } from '@src/utils';
import { Post } from '@src/entities';
import { colors } from '@src/styles';
import { memo } from 'react';
import { format } from 'date-fns';

type Props = {
  data: string;
};

const Blog: NextPage<Props> = ({ data }) => {
  const posts: Post[] = JSON.parse(data);

  return (
    <>
      <VStack h='100vh'>
        <Header topic='blog' />
        <VStack py={16}>
          {posts.map((post) => {
            return <PostCard post={post} key={post.slug} />;
          })}
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const post = getAllPosts();

  return {
    props: {
      data: post,
    },
  };
};

export default Blog;
