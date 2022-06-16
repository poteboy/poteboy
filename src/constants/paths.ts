import { LinkProps } from 'next/link';

export const paths: PathProps = {
  index: {
    href: '/',
    as: '/',
  },

  signUp: (opts?: { redirectTo?: string }) => ({
    href: '/sign-up',
    as: `/sign-up${opts?.redirectTo ? `?redirect=${encodeURIComponent(opts.redirectTo)}` : ''}`,
  }),

  category: {
    href: '/category',
    as: '/category',
  },

  categoryDetail: ({ categoryUid }: { categoryUid: string }) => ({
    href: `/category/${categoryUid}`,
  }),

  blogPost: ({ blogUid }: { blogUid: string }) => ({
    href: `/blog/${blogUid}`,
  }),

  blog: {
    href: '/blog',
    as: '/blog',
  },

  privacyPolicy: {
    href: '/legal/privacy-policy',
    as: '/legal/privacy-policy',
  },

  termOfUse: {
    href: '/legal/term-of-use',
    as: '/legal/term-of-use',
  },

  inquery: {
    href: '/about/inquery',
    as: '/about/inquery',
  },
};

const pathKeys = {
  // <root>/
  index: 'index',
  signUp: 'signUp',

  // <root>/category
  category: 'category',
  categoryDetail: 'categoryDetail',

  //<root>/blog
  blog: 'blog',
  blogPost: 'blogPost',

  //<root>/about
  inquery: 'inquery',

  //<root>/legal
  privacyPolicy: 'privacyPolicy',
  termOfUse: 'termOfUse',
} as const;

type PathProps = {
  [pathKeys.index]: LinkProps;
  [pathKeys.signUp]: (opts?: { redirectTo?: string }) => LinkProps;
  [pathKeys.category]: LinkProps;
  [pathKeys.blog]: LinkProps;
  [pathKeys.blogPost]: ({ blogUid }: { blogUid: string }) => LinkProps;
  [pathKeys.categoryDetail]: ({ categoryUid }: { categoryUid: string }) => LinkProps;
  [pathKeys.privacyPolicy]: LinkProps;
  [pathKeys.termOfUse]: LinkProps;
  [pathKeys.inquery]: LinkProps;
};
