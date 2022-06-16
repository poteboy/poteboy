import type { NextPage } from 'next';
import { Header } from '@src/components';
import { VStack } from '@chakra-ui/react';

const Blog: NextPage = () => {
  return (
    <VStack>
      <Header topic='blog' />
    </VStack>
  );
};

export default Blog;
