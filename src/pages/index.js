// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

import Layout from '../components/layout';
import Hero from '../components/hero';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fonts.regular.fontFamily};
    font-weight: ${fonts.regular.regular.weight};
    font-style: ${fonts.regular.regular.style};
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-weight: 400;
    font-style: regular;
    font-size: 16px;
    
    color: ${colors.greys.seven};
  }
`;

const GlobalWrapper = styled.div`
  height: 100vh;
`;

export default function Home () {
  return (
    <GlobalWrapper>
      <GlobalStyle />
      <Layout>
        <Hero />
      </Layout>
    </GlobalWrapper>
  );
}

export function Head () {
  return (
    <>
      <title>John McKenna - Portfolio</title>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
    </>
  );
}
