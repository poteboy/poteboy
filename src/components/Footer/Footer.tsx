import React, { FC, memo } from 'react';
import { VStack, Text, Divider, Image, Stack, Button } from '@chakra-ui/react';
import { BreakPoint, colors, MIN_DESKTOP_WIDTH, pc, sp, tab } from '@src/styles';
import { Spacer } from '../Spacer/Spacer';
import styled from 'styled-components';
import Link from 'next/link';
import { paths } from '@src/constants';

const FOOTER_STACK_WIDTH = 1200;

export const Footer: FC<{}> = memo(() => {
  return (
    <VStack as='footer' w='100vw' bg={colors.Black} bottom={0}>
      <Divider />
      <VStack alignItems='center' p={4} maxW={FOOTER_STACK_WIDTH}>
        <ResponsiveStack gap={{ base: '25px', md: '50px' }}>
          <FooterStack>
            <Text fontWeight={600} color={colors.White}>
              Terms
            </Text>
            <Spacer size={0.5} />
            <Link {...paths.privacyPolicy}>
              <Text
                as='a'
                variant='sub'
                _hover={{
                  borderBottom: `1px solid ${colors.Fonts.Sub}`,
                }}
                cursor='pointer'
                color={colors.White}
              >
                Privacy Policy
              </Text>
            </Link>
          </FooterStack>
          <FooterStack>
            <Link {...paths.inquery}>
              <Button as='a' cursor='pointer' boxShadow='none'>
                Contact
              </Button>
            </Link>
          </FooterStack>
        </ResponsiveStack>
      </VStack>
      <VStack bg={colors.Black} alignItems='center' p={{ base: 4, md: 8 }} w='100%'>
        <Text color={colors.White}>Copyright - poteboy 2022 All Right Reserved</Text>
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
