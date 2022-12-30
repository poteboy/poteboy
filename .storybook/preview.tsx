import { ChakraProvider } from "@chakra-ui/react";
import { theme, colorFromStorage } from "../src/styles";
import "../src/styles/styles.css";
import { useBrowserLayoutEffect, HistoryProvider } from "../src/hooks";
import { FC, ReactNode, memo } from "react";

const withChakra = (StoryFn: any) => {
  return (
    <ChakraProvider theme={theme}>
      <HistoryProvider>
        <ThemeProvider>
          <div id="story-wrapper">
            <StoryFn />
          </div>
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </ThemeProvider>
      </HistoryProvider>
    </ChakraProvider>
  );
};

export const decorators = [withChakra];

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
