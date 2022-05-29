import React, { FC, memo } from 'react';
import { VStack, Text, Image } from '@chakra-ui/react';
import { colors } from '@src/styles';
import { Header, Spacer } from '@src/components';
import { Blog } from '@src/entities';
import { useCallback } from 'react';

export const BlogCard: FC<{
  blog: Blog;
  onClickBlogCard: (id: string) => void;
}> = memo(({ blog, onClickBlogCard }) => {
  const onClick = useCallback(() => {
    onClickBlogCard(blog.id);
  }, []);

  return (
    <VStack
      bg={colors.White}
      width="368px"
      borderRadius="8px"
      cursor="pointer"
      _hover={{
        transform: 'translateY(-6px)',
      }}
      transition="transform 0.1s linear"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.15);"
      onClick={onClick}
    >
      <Image
        src={blog.eyecatch.url}
        width="368px"
        height="207px"
        borderTopRadius="8px"
      />
      <Spacer size={16} />
      <Text flexWrap="wrap" variant="button1" px="8px">
        {blog.title}
      </Text>
      <Spacer size={16} />
    </VStack>
  );
});
