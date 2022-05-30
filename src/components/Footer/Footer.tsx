import React, { FC, memo } from 'react';
import { VStack, Text } from '@chakra-ui/react';
import { colors } from '@src/styles';

export const Footer: FC = memo(() => {
  return (
    <VStack as="footer" bg={colors.Black} alignItems="center" p={8}>
      <Text color={colors.White}>
        Copyright - kenko-ichiban 2022 All Right Reserved
      </Text>
    </VStack>
  );
});
