import React, { FC, memo } from 'react';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { Header } from '@src/components';
import { VStack } from '@chakra-ui/react';
import { colors } from '@src/styles';
import { MicroList, Category } from '@src/entities';
import { client as microClient, paths } from '@src/constants';

type Props = {
  blogs: any;
  categories: MicroList<Category>;
};

const BlogPost: NextPage<Props> = props => {
  console.log(props.blogs);

  return <BlogPostScreen {...props} />;
};

type ScreenProps = {} & Props;

const BlogPostScreen: FC<ScreenProps> = memo(({ categories }) => {
  return (
    <>
      <Header categories={categories.contents} />
      <VStack bg={colors.BackGround} height="100vh">
        <></>
      </VStack>
    </>
  );
});

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const uid = context.params?.uid as string | undefined;
  const blogs = await microClient.get({
    endpoint: 'blogs',
    contentId: uid,
  });
  const categories: MicroList<Category> = await microClient.get({
    endpoint: 'categories',
  });

  return {
    props: {
      blogs,
      categories,
    },
  };
};

export default BlogPost;
