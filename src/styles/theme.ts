import { extendTheme } from "@chakra-ui/react";
import {} from "@chakra-ui/theme";
import { colors, Color } from "./colors";

declare module "@chakra-ui/react" {
  interface Theme {
    colors: Color;
  }
}

export const theme = extendTheme({
  colors,
});
