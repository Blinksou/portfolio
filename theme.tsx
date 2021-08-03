import { DefaultTheme } from 'styled-components';

const white = "#FDFFFF";

const theme: DefaultTheme = {
  colors: {
    common: {
      bg: "linear-gradient(to right top, #232528, #212225, #1e2022, #1c1d20, #1a1b1d, #18181a, #161618, #141315, #110f11, #0c0b0c, #060506, #000000)",
      black: "#232528",
      white: white,
    },
    primary: {
      main: "#2A2A72",
      contrastText: white,
    },
    secondary: {
      main: "#5887FF",
      contrastText: white,
    },
  },
  fonts: {
    regular: '"Quicksand", sans-serif',
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

export default theme;
