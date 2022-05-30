import React, { FC, memo } from 'react';
import {
  HStack,
  Container,
  Flex,
  Button,
  Text,
  Image,
  VStack,
} from '@chakra-ui/react';
import { colors, sp, MAX_MOBILE_WIDTH } from '@src/styles';
import Link from 'next/link';
import styled from 'styled-components';
import { paths } from '@src/constants';
import Title from '@src/public/title/main-title.png';
import { Category } from '@src/entities';
import { useRouter } from 'next/router';

type Props = {
  categories: Category[];
  selectedId?: string;
};

export const Header: FC<Props> = memo(({ categories, selectedId }) => {
  const router = useRouter();

  return (
    <Flex as="header" flexDir="column" bg={colors.White} alignItems="center">
      <ContentBar maxW={'1200px'} py="12px">
        <HStack justifyContent="center" mx="auto" py="4px">
          <Link {...paths.index}>
            <a>
              <Image src={Title} width="170px" height="40px" cursor="pointer" />
            </a>
          </Link>
        </HStack>
      </ContentBar>
      <HStack
        mx="auto"
        bg={colors.Black}
        // bg="#5788c3"
        height="30px"
        width="100vw"
        p="24px 0px"
      >
        <HStack justifyContent="center" mx="auto" gap="20px" maxW="1200px">
          {categories.map(category => {
            return (
              <Link {...paths.categoryDetail({ categoryUid: category.id })}>
                <Text
                  as="a"
                  variant="button1"
                  color={
                    category.id === selectedId
                      ? colors.Secondary.Light
                      : colors.White
                  }
                  _hover={{
                    color: colors.Secondary.Main,
                  }}
                  cursor="pointer"
                >
                  {category.name}
                </Text>
              </Link>
            );
          })}
        </HStack>
      </HStack>
    </Flex>
  );
});

const ContentBar = styled(Container)`
  ${sp`
    max-width: ${MAX_MOBILE_WIDTH * 0.8}px;
  `}
`;
