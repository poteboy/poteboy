import React, { FC, memo } from 'react';
import { Box, HStack, Text, Image, VStack } from '@chakra-ui/react';
import { Post } from '@src/entities';
import { format } from 'date-fns';
import { colors } from '@src/styles';
import { useHover } from '@src/hooks';

export const PostCard: React.FC<{ post: Post }> = memo(({ post }) => {
  const { hoverRef } = useHover();

  return (
    <HStack
      ref={hoverRef}
      bg={colors.White}
      py='24px'
      px='16px'
      borderRadius={8}
      cursor='pointer'
      _hover={{ bg: colors.BackGround }}
      alignItems='center'
    >
      <VStack alignItems='flex-start'>
        <Text>{post.data.date}</Text>
        <Text fontSize='1.5rem' fontWeight={700} fontFamily='system-ui'>
          {post.data.title}
        </Text>
      </VStack>
    </HStack>
  );
});

const formatDate = (date: string) => {
  return format(new Date(date), 'MMMM d, yyyy');
};

// 0 5px 20px 0 rgb(24 144 255 / 22%);
