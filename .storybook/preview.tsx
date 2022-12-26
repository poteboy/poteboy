import { ChakraProvider } from "@chakra-ui/react";
import { theme, ThemeProvider } from "../src/styles";
import "../src/styles/styles.css";

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider>
        <div id="story-wrapper">
          <StoryFn />
        </div>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </ThemeProvider>
    </ChakraProvider>
  );
};

export const decorators = [withChakra];
