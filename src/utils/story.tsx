import styled from "@emotion/styled";
import { useEffect, FC, ReactNode } from "react";

const Layout = styled.div`
  background: white;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StoryLayout: FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    document.body.dataset.theme = "light";
  });

  return <Layout>{children}</Layout>;
};
