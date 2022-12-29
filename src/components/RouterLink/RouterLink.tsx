import Link, { type LinkProps as InternalLinkProps } from "next/link";
import { FC, ReactNode, memo } from "react";
import styled from "@emotion/styled";

type LinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof InternalLinkProps
> &
  InternalLinkProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;

export const RouterLink: FC<LinkProps> = memo(({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
});

const StyledLink = styled(Link)`
  text-decoration: underline;
  text-decoration-thickness: 0.5px;
  text-underline-offset: 0.1em;
  color: var(--base-text-link);
`;
