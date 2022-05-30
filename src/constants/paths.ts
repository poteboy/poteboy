import { LinkProps } from 'next/link';

export const paths: PathProps = {
    index: {
      href: '/',
      as: '/',
    },
  
    signUp: (opts?: { redirectTo?: string }) => ({
      href: '/sign-up',
      as: `/sign-up${
        opts?.redirectTo ? `?redirect=${encodeURIComponent(opts.redirectTo)}` : ''
      }`,
    }),

    category: {
      href: '/category',
      as: '/category'
    },

    categoryDetail: ({ categoryUid }: {categoryUid: string}) => ({
      href: '/category/[categoryUid]',
      as: `/category/${categoryUid}`
    }),

    blog: ({ blogUid }: {blogUid: string}) => ({
      href: '/blog/[blogUid]',
      as: `/blog/${blogUid}`
    })
  
  };
  
const pathKeys = {
    index: 'index',
    signUp: 'signUp',
    category: 'category',
    categoryDetail: 'categoryDetail',
    blog: 'blog'
} as const;
  
type PathProps = {
    [pathKeys.index]: LinkProps;
    [pathKeys.signUp] : (opts?: { redirectTo?: string }) => LinkProps
    [pathKeys.category]: LinkProps;
    [pathKeys.blog]: ({ blogUid }: {blogUid: string}) => LinkProps
    [pathKeys.categoryDetail]: ({ categoryUid }: {categoryUid: string}) => LinkProps
};