import React, { FC, memo } from 'react';
import { VStack, Text, Divider, Image, Stack, Button } from '@chakra-ui/react';
import { colors, MIN_DESKTOP_WIDTH, pc, sp, tab } from '@src/styles';
import { Spacer } from '../Spacer/Spacer';
import styled from 'styled-components';
import Link from 'next/link';
import { paths } from '@src/constants';

const FOOTER_STACK_WIDTH = 1200;

export const Footer: FC = memo(() => {
  return (
    <VStack as="footer" w="100vw" bg={colors.White}>
      <Divider />
      <VStack alignItems="center" p={4} maxW={FOOTER_STACK_WIDTH}>
        <ResponsiveStack gap="50px">
          <FooterStack>
            <Link {...paths.index}>
              <Image
                src={require('@src/public/title/main-title.png')}
                w={FOOTER_STACK_WIDTH / 5.5 + 'px'}
                cursor="pointer"
              />
            </Link>
            <Text variant="sub">総合健康情報サイト</Text>
          </FooterStack>
          <FooterStack>
            <Text fontWeight={600}>規約</Text>
            <Spacer size={0.5} />
            <Link {...paths.privacyPolicy}>
              <Text
                as="a"
                variant="sub"
                _hover={{
                  borderBottom: `1px solid ${colors.Fonts.Sub}`,
                }}
                cursor="pointer"
              >
                プライバシーポリシー
              </Text>
            </Link>
            {/* <Spacer size={0.5} />
            <Link {...paths.termOfUse}>
              <Text
                as="a"
                variant="sub"
                _hover={{
                  borderBottom: `1px solid ${colors.Fonts.Sub}`,
                }}
                cursor="pointer"
              >
                利用規約
              </Text>
            </Link> */}
          </FooterStack>
          <FooterStack>
            <Button variant="outline">お問合せはこちら</Button>
          </FooterStack>
        </ResponsiveStack>
      </VStack>
      <VStack bg={colors.Black} alignItems="center" p={8} w="100%">
        <Text color={colors.White}>
          Copyright - kenko-ichiban 2022 All Right Reserved
        </Text>
      </VStack>
    </VStack>
  );
});

const ResponsiveStack = styled(Stack)`
  ${sp`
    flex-direction: column;
    `}
  ${tab`
    flex-direction: column;
    `}  
  ${pc`
    flex-direction: row;
    `}
`;

const FooterStack = styled(VStack)`
  justify-content: center;
  margin: 4px 4px;
  width: ${FOOTER_STACK_WIDTH / 5 + 'px'};
`;
