/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
