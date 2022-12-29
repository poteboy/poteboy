import type { LinkProps } from "next/link";
import { z } from "zod";

type Option = {
  redirectTo?: string;
  id?: string;
};

export const pathKeys = z.enum(["index", "about", "blog"]);
export type PathKey = z.infer<typeof pathKeys>;

export const paths: Record<PathKey, LinkProps> = {
  index: {
    href: "/",
    as: "/",
  },

  about: {
    href: "/about",
    as: "/about",
  },

  blog: {
    href: "/blog",
    as: "/blog",
  },
} as const;

export const dynamicPaths: Record<"post", (opt: Option) => LinkProps> = {
  post: (opt: Option) => ({
    href: `/blog/${opt.id}`,
  }),
} as const;

// Nextjs gives compiler error
//  satisfies Record<PathKey, LinkProps | ((opt?: Option) => LinkProps)>;
