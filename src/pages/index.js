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
      <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
      <link rel="apple-touch-icon" href="logo192.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#BEEE62" />
      <meta
        name="description"
        content="John McKenna's Portfolio"
      />

      <meta property="og:title" content="John McKenna - Portfolio" />
      <meta property="og:description" content="John McKenna Portfolio" />
      <meta property="og:url" content="https://www.johnmckenna.io" />
      <meta property="og:image" content="https://john-mckenna-portfolio-images.s3.amazonaws.com/john-mckenna-portfolio-open-graph.png" />
      <meta property="og:image:alt" content="John McKenna Portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="John McKenna - Portfolio" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.johnmckenna.io" />
      <meta property="twitter:title" content="John McKenna - Portfolio" />
      <meta property="twitter:description" content="John McKenna Portfolio" />
      <meta property="twitter:image" content="https://john-mckenna-portfolio-images.s3.amazonaws.com/john-mckenna-portfolio-open-graph.png" />
    </>
  );
}
