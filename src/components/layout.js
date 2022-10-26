// eslint-disable-next-line no-unused-vars
import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';

import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

import Nav from './nav';

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
    background: ${colors.greys.one};
    color: ${colors.greys.seven};
  }

  @font-face {
    font-family:"timonium";
    src:url("https://use.typekit.net/af/b44746/00000000000000007735f09e/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i8&v=3") format("woff2"),url("https://use.typekit.net/af/b44746/00000000000000007735f09e/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i8&v=3") format("woff"),url("https://use.typekit.net/af/b44746/00000000000000007735f09e/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i8&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:800;font-stretch:normal;
  }

  @font-face {
    font-family:"auger-mono";
    src:url("https://use.typekit.net/af/801002/00000000000000007735f32c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/801002/00000000000000007735f32c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/801002/00000000000000007735f32c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:300;font-stretch:normal;
  }

  @font-face {
    font-family:"auger-mono";
    src:url("https://use.typekit.net/af/cf6884/00000000000000007735f331/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/cf6884/00000000000000007735f331/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/cf6884/00000000000000007735f331/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
  }

  @font-face {
    font-family:"elza-text";
    src:url("https://use.typekit.net/af/d053a5/00000000000000007735f93a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/d053a5/00000000000000007735f93a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/d053a5/00000000000000007735f93a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
  }

  @font-face {
    font-family:"elza-text";
    src:url("https://use.typekit.net/af/b462b0/00000000000000007735f939/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/b462b0/00000000000000007735f939/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/b462b0/00000000000000007735f939/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
  }

  @font-face {
    font-family:"elza-text";
    src:url("https://use.typekit.net/af/352dfa/00000000000000007735f93d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/352dfa/00000000000000007735f93d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/352dfa/00000000000000007735f93d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
  }

  @font-face {
    font-family:"elza-text";
    src:url("https://use.typekit.net/af/9b4894/00000000000000007735f938/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/9b4894/00000000000000007735f938/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/9b4894/00000000000000007735f938/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
  }
`;

const GlobalWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5em 1fr;
  grid-template-areas: "nav" "page" "footer";
`;

const ScrollWrapper = styled.div`
  grid-area: nav / nav / app / app;
  display: grid;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  background-color: ${colors.greys.one};
  &::-webkit-scrollbar {
    display: none;
  }
`;

function Layout ({ children }) {
  return (
    <GlobalWrapper>
      <GlobalStyle />
      <Nav />
      <ScrollWrapper>
        {children}
      </ScrollWrapper>
      <h1>footer</h1>
    </GlobalWrapper>
  );
}

export default Layout;
