/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/colors';

import { JumboLarge, NavLink } from './text';

const Wrapper = styled.div`
  display: grid;
  row-gap: 2rem;
  margin: 10em 0 0 0;
  padding: 10em;
  grid-template-areas: "cta" "nav";
  grid-template-rows: 20em auto;
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
  margin: 0 0 0 18.3em;
`;

function Hero () {
  return (
    <Wrapper>
      <CTAWrapper>
        <JumboLarge
          margin="0 0 0 18rem"
        >
          Hello
          <span style={{ color: colors.colors.orange }}>,</span>
          {' '}
          I'm John
        </JumboLarge>
        <JumboLarge margin="-2rem 0 0 0">
          Developer
          {' '}
          <span style={{ color: colors.colors.purple }}>and</span>
          {' '}
          Designer
        </JumboLarge>
      </CTAWrapper>
      <NavWrapper>
        <NavLink href="/work">Work</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink>Contact</NavLink>
      </NavWrapper>
    </Wrapper>
  );
}

export default Hero;
