/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/colors';

import { Heading3, JumboLarge, NavLinkBig } from '../components/text';
import Layout from '../components/layout';

const Wrapper = styled.div`
  display: grid;
  row-gap: 2rem;
  margin: 18rem 0 0 0;
  grid-template-areas: "cta" "nav";
  grid-template-rows: 20rem auto;
  justify-items: center;
`;

const CTAWrapper = styled.div`
  grid-area: cta;
`;

const NavWrapper = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: repeat(4, 2rem);
  row-gap: 2rem;
  margin: 0 42rem 0 0;
`;

function the404 () {
  return (
    <Layout>
      <Wrapper>
        <CTAWrapper>
          <JumboLarge
            margin="0 0 0 11.4rem"
          >
            Crap
            <span style={{ color: colors.colors.orange }}>!</span>
          </JumboLarge>
          <Heading3>We can't find that page, but maybe you were looking for one of these?</Heading3>
        </CTAWrapper>
        <NavWrapper>
          <NavLinkBig to="/work">Work</NavLinkBig>
          <NavLinkBig to="/blog">Blog</NavLinkBig>
          <NavLinkBig to="/about">About</NavLinkBig>
          <NavLinkBig to="/contact">Contact</NavLinkBig>
        </NavWrapper>
      </Wrapper>
    </Layout>
  );
}

export default the404;
