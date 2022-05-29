import React, { FC, memo } from 'react';
import type { NextPage } from 'next';
import { Header } from '@src/components';

const BlogPost: NextPage = () => {
  return <BlogPostScreen />;
};

type Props = {};

const BlogPostScreen: FC = memo(() => {
  return (
    <>
      <Header />
    </>
  );
});

export default BlogPost;
