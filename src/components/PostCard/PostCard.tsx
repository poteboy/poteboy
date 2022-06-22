import React, { FC, memo } from 'react';
import Link from 'next/link';
import { Box, HStack, Text, Image, VStack, Flex } from '@chakra-ui/react';
import { Post } from '@src/entities';
import { format } from 'date-fns';
import { BreakPoint, colors } from '@src/styles';
import { useHover, useWindowSize } from '@src/hooks';
import { paths } from '@src/constants';

export const PostCard: React.FC<{ post: Post }> = memo(({ post }) => {
  return (
    <_PostCard
      slug={post.slug}
      icon={post.data.icon}
      date={post.data.date}
      title={post.data.title}
    />
  );
});

export const _PostCard: React.FC<{ slug: string; icon: string; date: string; title: string }> =
  memo(({ slug, icon, date, title }) => {
    const { hoverRef, hovered } = useHover();
    const { width } = useWindowSize();

    const size = width && width > BreakPoint ? 92 : 76;
    const iconSize = width && width > BreakPoint ? 42 : 37;
    const gapSize = width && width > BreakPoint ? 6 : 12;

    return (
      <Link {...paths.blogPost({ blogUid: slug })}>
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
            <Text fontSize={`${iconSize}px`}>{icon}</Text>
          </VStack>
          <Flex flexDir='column' alignItems='flex-start'>
            <Text>{date}</Text>
            <Text
              fontSize='1.5rem'
              fontWeight={700}
              color={hovered ? colors.Primary.Main : colors.Black}
            >
              {title}
            </Text>
          </Flex>
        </HStack>
      </Link>
    );
  });

const formatDate = (date: string) => {
  return format(new Date(date), 'MMMM d, yyyy');
};

// 0 5px 20px 0 rgb(24 144 255 / 22%);
