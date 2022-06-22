import React from 'react';
import { ComponentMeta } from '@storybook/react';
import About from './about.page';

export default {
  title: 'About',
  component: About,
} as ComponentMeta<typeof About>;

export const Default = <About />;
