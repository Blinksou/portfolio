import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Navbar from '../components/Navbar';
import { GlobalStyle } from '../components/styled/GlobalStyles.styled';
import theme from '../theme';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default CustomApp;
