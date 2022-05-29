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
  
  };
  
const pathKeys = {
    index: 'index',
    signUp: 'signUp',
} as const;
  
type PathProps = {
    [pathKeys.index]: LinkProps;
    [pathKeys.signUp] : (opts?: { redirectTo?: string }) => LinkProps
};