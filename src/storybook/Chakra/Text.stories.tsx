import React from 'react';
import { ComponentMeta, storiesOf, Story } from '@storybook/react';
import { Text, TextProps } from '@chakra-ui/react';

type Props = {
  text: string;
  variant: 'body1';
};

//👇 We create a “template” of how args map to rendering
export default {
  title: 'Text',
  component: Text,
  argTyps: {
    variant: {
      name: 'variant',
      control: 'select',
      options: ['body1'],
    },
  },
};

const Template: Story<TextProps> = (args) => <Text {...args} />;
export const body1 = Template.bind({});
body1.args = {
  children: 'hello',
  variant: 'body1',
};
