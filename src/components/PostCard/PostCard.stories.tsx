import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { _PostCard as PostCard } from './PostCard';
import { Post } from '@src/entities';

const post: Post = {
  content: '## Advantages of learning Figma for developers',
  data: {
    date: '2022-06-17',
    tags: ['css'],
    title: 'Introduction to Figma for Developers',
    icon: '🍑',
  },
  slug: 'test',
};

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    title: post.data.title,
    icon: post.data.icon,
    date: '2022-12-11',
  },
} as ComponentMeta<typeof PostCard>;

export const Default = <PostCard title='hello' icon='🍑' slug='test' date='2022-12-11' />;
