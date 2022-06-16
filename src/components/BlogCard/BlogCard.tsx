import React, { FC, memo } from 'react';
import { VStack, Text, Image, StackProps } from '@chakra-ui/react';
import { colors } from '@src/styles';
import { Header, Spacer } from '@src/components';
import { Blog } from '@src/entities';
import { useCallback } from 'react';

const width = 320;
export const BlogCard: FC<
  {
    blog: Blog;
    onClickBlogCard: (id: string) => void;
  } & StackProps
> = memo(({ blog, onClickBlogCard, ...style }) => {
  const onClick = useCallback(() => {
    onClickBlogCard(blog.id);
  }, []);

  return (
    <VStack
      as='article'
      bg={colors.White}
      width={width}
      borderRadius='8px'
      cursor='pointer'
      _hover={{
        transform: 'translateY(-6px)',
      }}
      transition='transform 0.1s linear'
      boxShadow='0 4px 8px rgba(0, 0, 0, 0.15);'
      onClick={onClick}
      marginBottom='16px'
      {...style}
    >
      <Image src={blog.eyecatch.url} width={width} height={width * 0.563} borderTopRadius='8px' />
      <Spacer size={16} />
      <Text flexWrap='wrap' variant='button1' px='8px'>
        {blog.title}
      </Text>
      <Spacer size={16} />
    </VStack>
  );
});
