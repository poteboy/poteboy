import React, { FC, ReactNode, memo } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme, colorFromStorage } from "@src/styles";
import { useBrowserLayoutEffect } from "@src/hooks";

const ProviderWrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraProvider theme={theme}>
    <ThemeProvider>{children}</ThemeProvider>
  </ChakraProvider>
);

const _render = (
  ui: Parameters<typeof render>[0],
  options?: Parameters<typeof render>[1]
) => render(ui, { wrapper: ProviderWrapper, ...options });
export * from "@testing-library/react";
export { _render as render };

export const ThemeProvider: FC<{ children: ReactNode }> = memo(
  ({ children }) => {
    useBrowserLayoutEffect(() => {
      const result = colorFromStorage();
      document.body.dataset.theme = result;
    }, []);
    return <>{children}</>;
  },
  (_prev, _curr) => true
);
