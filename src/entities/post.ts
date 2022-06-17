import { TagName } from './tag';

export type Post = {
  content: string;
  data: {
    date: string; // 2022-06-17
    tags: TagName[];
    title: string;
    icon: string;
  };
  slug: string;
};
