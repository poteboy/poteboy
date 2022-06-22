import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Text } from '@chakra-ui/react';

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const text = 'こんにちわ';

export const Default = <Text>{text}</Text>;

export const Button1 = <Text variant='button1'>{text}</Text>;
