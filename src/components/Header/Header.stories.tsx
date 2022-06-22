import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Header, Props } from './Header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default = <Header />;
