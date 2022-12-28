import { extendTheme, type ComponentStyleConfig } from "@chakra-ui/react";
import { colors, Color } from "./colors";

export const MOBILE_SIZE = 780;

declare module "@chakra-ui/react" {
  interface Theme {
    colors: Color;
  }
}
// 1 = 4px

const Text: ComponentStyleConfig = {
  baseStyle: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "normal",
    color: colors.baseText,
    fontFamily: "Wotfard,Futura,-apple-system,sans-serif",
  },
  variants: {
    heading: {
      fontSize: "36px",
      lineHeight: "40px",
      fontWeight: "bold",
      color: colors.baseText,
    },
    label: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "bold",
      color: colors.baseText,
    },
    body: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "normal",
      color: colors.baseText,
    },
    caption: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "normal",
      color: colors.baseText,
    },
  },
};

export const theme = extendTheme({
  colors,
  components: {
    Text,
  },
});
