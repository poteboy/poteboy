import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { extendTheme, ButtonProps } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { colors } from './colors';
import { MAX_MOBILE_WIDTH, MIN_TABLET_WIDTH, MIN_DESKTOP_WIDTH } from './size';
// import "@fontsource/quicksand";

const breakpoints = createBreakpoints({
  sm: `${MAX_MOBILE_WIDTH}px`,
  md: `${MIN_TABLET_WIDTH}px`,
  lg: `${MIN_DESKTOP_WIDTH}px`,
  xl: '1200px',
});

const Heading: ComponentStyleConfig = {
  variants: {
    title: () => ({
      fontSize: '2em',
      fontWeight: 700,
      marginY: '4px',
    }),
    subTitle: () => ({
      fontSize: '1.5em',
      fontWeight: 600,
      marginY: '2px',
    }),
  },
};

const Text: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: 'Quicksand,serif',
    fontWeight: 400,
    lineHeight: '1.7',
    fontSize: '16px',
    color: colors.Black,
  },
  variants: {
    button1: () => ({
      fontSize: '18px',
      fontWeight: 600,
    }),
    heading0: () => ({
      fontSize: '2.5rem',
      fontWeight: 700,
    }),
    heading1: () => ({
      fontSize: '22px',
      fontWeight: 600,
    }),
    heading2: () => ({
      fontSize: '20px',
      fontWeight: 600,
    }),
    title: () => ({
      fontSize: '24px',
      fontWeight: 700,
      marginY: '4px',
    }),
    sub: () => ({
      fontSize: '14px',
      fontWeight: 400,
      color: colors.Fonts.Sub,
    }),
    caption: () => ({
      fontSize: '18px',
      fontWeight: 700,
    }),
  },
};

const Button: ComponentStyleConfig = {
  variants: {
    solid: (props) => ({
      color: colors.White,
      bg: props.disabled ? colors.Disabled : colors.Primary.Main,
      boxShadow: `0 1px 7px ${colors.Primary.Main_RGB}`,
      padding: '6px 12px',
      _focus: {
        boxShadow: 'none',
      },
      _hover: {
        bg: colors.Primary.Dark,
      },
    }),
    fluid: (props) => ({
      color: colors.White,
      bg: props.disabled ? colors.Disabled : colors.Secondary.Main,
      boxShadow: `0 1px 7px ${colors.Secondary.Main}`,
      padding: '6px 12px',
      _focus: {
        boxShadow: 'none',
      },
      _hover: {
        bg: colors.Secondary.Dark,
      },
    }),
    outline: (props) => ({
      borderWidth: 2,
      borderColor: colors.Secondary.Main,
      bg: colors.White,
      color: colors.Secondary.Main,
      height: '40px',
      px: '32px',
      borderRadius: '50px',
      fontSize: '14px',
      fontWeight: 700,
      _hover: {
        bg: '#daeffd',
      },
      _focus: {
        boxShadow: 'none',
      },
    }),
  },
};

export const theme = extendTheme({
  components: {
    Text,
    Button,
    Heading,
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
});
