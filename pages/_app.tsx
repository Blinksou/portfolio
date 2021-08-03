import { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Container } from "../components/styled/Container.styled";
import { GlobalStyle } from "../components/styled/GlobalStyles.styled";
import theme from "../theme";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default CustomApp;
