import { extendTheme } from "@chakra-ui/react";
import {} from "@chakra-ui/theme";
import { colors, Color } from "./colors";

export const MOBILE_SIZE = 780;

declare module "@chakra-ui/react" {
  interface Theme {
    colors: Color;
  }
}

export const theme = extendTheme({
  colors,
});
