import React, { FC } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";

const ProviderWrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

const _render = (
  ui: Parameters<typeof render>[0],
  options?: Parameters<typeof render>[1]
) => render(ui, { wrapper: ProviderWrapper, ...options });
export * from "@testing-library/react";
export { _render as render };
