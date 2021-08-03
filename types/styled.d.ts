import 'styled-components';

interface Palette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      common: {
        bg: string;
        black: string;
        white: string;
      };
      primary: Palette;
      secondary: Palette;
    };
    fonts: {
      regular: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
