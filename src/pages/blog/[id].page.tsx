import React, { FC, memo } from 'react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Header, Spacer, MarkdownContent, Footer } from '@src/components';
import { Heading, VStack } from '@chakra-ui/react';
import { colors } from '@src/styles';
import { MicroList, Category, Blog } from '@src/entities';
import { client as microClient, paths } from '@src/constants';

type Props = {
  blog: Blog;
  categories: MicroList<Category>;
};

const BlogPost: NextPage<Props> = props => {
  return <BlogPostScreen {...props} />;
};

type ScreenProps = {} & Props;

const BlogPostScreen: FC<ScreenProps> = memo(({ categories, blog }) => {
  console.log(blog);

  return (
    <>
      <Header categories={categories.contents} />
      <VStack bg={colors.BackGround} minH="100vh">
        <Spacer size={32} />
        <VStack maxW="1200px">
          <Heading as="h1">{blog.title}</Heading>
          <VStack bg={colors.White} p="20px 40px" w="calc(100% - 330px)">
            <MarkdownContent content={blog.content} />
          </VStack>
          <Spacer size={64} />
        </VStack>
      </VStack>
      <Footer />
    </>
  );
});

export const getStaticPaths: GetStaticPaths = async context => {
  const blogs: MicroList<Blog> = await microClient.get({
    endpoint: 'blogs',
  });

  const paths = blogs.contents.map(blog => {
    return {
      params: { id: blog.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async context => {
  const uid = context.params?.uid as string | undefined;
  const blogs: MicroList<Blog> = await microClient.get({
    endpoint: 'blogs',
    contentId: uid,
  });
  const categories: MicroList<Category> = await microClient.get({
    endpoint: 'categories',
  });

  return {
    props: {
      blog: blogs.contents[0],
      categories,
    },
    revalidate: 10,
  };
};

export default BlogPost;
