import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    background: ${(p) => p.theme.colors.common.bg};
    color: ${(p) => p.theme.colors.common.white};
    font-family: ${(p) => p.theme.fonts.regular};
    overflow: hidden;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }
  
  * {
    box-sizing: border-box;
  }

  button {
    border: none;
  }
`;
