import React, { FC, ReactNode, memo } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme, colorFromStorage } from "@src/styles";
import { useBrowserLayoutEffect, HistoryProvider } from "@src/hooks";

const ProviderWrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraProvider theme={theme}>
    <HistoryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </HistoryProvider>
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
