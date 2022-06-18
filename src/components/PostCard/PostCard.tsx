import React, { FC, memo } from 'react';
import { Box, HStack, Text, Image, VStack, Flex } from '@chakra-ui/react';
import { Post } from '@src/entities';
import { format } from 'date-fns';
import { BreakPoint, colors } from '@src/styles';
import { useHover, useWindowSize } from '@src/hooks';

export const PostCard: React.FC<{ post: Post }> = memo(({ post }) => {
  const { hoverRef, hovered } = useHover();
  const { width } = useWindowSize();

  const size = width && width > BreakPoint ? 92 : 76;
  const iconSize = width && width > BreakPoint ? 42 : 37;
  const gapSize = width && width > BreakPoint ? 6 : 12;

  return (
    <HStack
      ref={hoverRef}
      py='24px'
      px='16px'
      borderRadius={8}
      cursor='pointer'
      _hover={{ bg: colors.Primary.Light }}
      alignItems='center'
      gap={`${gapSize}px`}
    >
      <VStack
        borderRadius='12px'
        bg={hovered ? colors.White : colors.BackGround}
        width={`${size}px`}
        h={`${size}px`}
        alignItems='center'
        justifyContent='center'
      >
        <Text fontSize={`${iconSize}px`}>{post.data.icon}</Text>
      </VStack>
      <Flex flexDir='column' alignItems='flex-start'>
        <Text>{post.data.date}</Text>
        <Text
          fontSize='1.5rem'
          fontWeight={700}
          color={hovered ? colors.Primary.Main : colors.Black}
        >
          {post.data.title}
        </Text>
      </Flex>
    </HStack>
  );
});

const formatDate = (date: string) => {
  return format(new Date(date), 'MMMM d, yyyy');
};

// 0 5px 20px 0 rgb(24 144 255 / 22%);
