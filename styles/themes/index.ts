import {
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
  ThemeConfig
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const fonts = `'Inter', '-apple-system','BlinkMacSystemFont',"Segoe UI",'Helvetica','Arial','sans-serif',"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`;

export const theme = extendTheme(
  {
    fonts: {
      heading: fonts,
      body: fonts
    },
    colors: {
      brand: baseTheme.colors.purple
    },
    styles: {
      global: (props) => ({
        body: {
          fontFamily: 'body',
          bg: mode('white', 'gray.800')(props),
          lineHeight: 'base'
        }
      })
    }
  },
  config,
  withDefaultColorScheme({ colorScheme: 'brand' })
);
