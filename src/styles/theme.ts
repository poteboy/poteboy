import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { extendTheme, ButtonProps } from '@chakra-ui/react'
import{ createBreakpoints } from '@chakra-ui/theme-tools'
import { colors } from './colors'
import { MAX_MOBILE_WIDTH, MIN_TABLET_WIDTH, MIN_DESKTOP_WIDTH } from './size'

const breakpoints = createBreakpoints({
  sm: `${MAX_MOBILE_WIDTH}px`,
  md: `${MIN_TABLET_WIDTH}px`,
  lg: `${MIN_DESKTOP_WIDTH}px`,
  xl: '1200px',
})

const Heading: ComponentStyleConfig = {
  variants: {
    title: () => ({
      fontSize: '2em',
      fontWeight: 700,
      marginY: '4px'
    }),
    subTitle: () => ({
      fontSize: '1.5em',
      fontWeight: 600,
      marginY: '2px'
    })
  }
}

const Text: ComponentStyleConfig = {
    baseStyle: {
        fontFamily: 'Hiragino Sans',
        fontWeight: 400,
        lineHeight: '1.7',
        fontSize: '16px',
        color: colors.Black
    },
    variants: {
      button1: () => ({
        fontSize: '18px',
        fontWeight: 600
      }),
      heading1: () => ({
        fontSize: '22px',
        fontWeight: 600
      }),
      heading2: () => ({
        fontSize: '20px',
        fontWeight: 600
      }),
      title: () => ({
        fontSize: '24px',
        fontWeight: 700,
        marginY: '4px'
      }),
      sub: () => ({
        fontSize: '14px',
        fontWeight: 400,
        color: colors.Fonts.Sub,
      })
    }
}

const Button: ComponentStyleConfig = {
  variants: {
    solid: (props) => ({
      color: colors.White,
      bg: props.disabled ? colors.Disabled : colors.Primary.Main,
      // boxShadow: `0 1px 7px ${colors.Primary.Main_RGB}`,
      _focus: {
        boxShadow: 'none',
      },
      _hover: {
        bg: colors.Primary.Main_Hover
      },
    }),
    outline: (props) => ({
      borderWidth: 2,
      borderColor: colors.Primary.MainClear,
      bg: colors.White,
      color: colors.Primary.MainClear,
      height:"40px",
      px:"32px",
      borderRadius:"50px",
      fontSize: "14px",
      fontWeight:700,
      _hover: {
        bg: '#daeffd',
      },
      _focus: {
        boxShadow: 'none',
      },
    })
  }
}


export const theme = extendTheme({
    components: {
      Text,
      Button,
      Heading
    },
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
  })