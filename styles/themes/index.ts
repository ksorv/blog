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

export const theme = extendTheme(
  {
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
