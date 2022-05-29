import type { NextPage } from 'next';
import Head from 'next/head';
import React, { FC, memo, useCallback } from 'react';
import { VStack, Text, Image } from '@chakra-ui/react';
import { colors } from '@src/styles';
import { Header, Spacer, BlogCard } from '@src/components';
import { GetStaticProps, GetStaticPaths } from 'next';
import { client as microClient, paths } from '@src/constants';
import { MicroList, Blog, Category } from '@src/entities';
import { useRouter } from 'next/router';

type Props = {
  blogs: MicroList<Blog>;
  categories: MicroList<Category>;
};

const Root: NextPage<Props> = props => {
  const router = useRouter();

  const selectBlogCard = useCallback(
    (id: string) => {
      const path = paths.blog({ blogUid: id });
      router.push(path.href, path.as);
    },
    [router],
  );

  return <RootScreen onClickBlogCard={selectBlogCard} {...props} />;
};

type ScreenProps = {
  onClickBlogCard: (id: string) => void;
} & Props;

const RootScreen: FC<ScreenProps> = memo(props => {
  const { blogs, onClickBlogCard, categories } = props;
  return (
    <>
      <Header categories={categories.contents} />
      <VStack bg={colors.BackGround} height="100%">
        <Spacer size={32} />
        <BlogCard blog={blogs.contents[0]} onClickBlogCard={onClickBlogCard} />
        <BlogCard blog={blogs.contents[0]} onClickBlogCard={onClickBlogCard} />
        <BlogCard blog={blogs.contents[0]} onClickBlogCard={onClickBlogCard} />
      </VStack>
    </>
  );
});

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs: MicroList<Blog> = await microClient.get({
    endpoint: 'blogs',
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

export default Root;
