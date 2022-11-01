/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/colors';

import { JumboLarge, NavLink } from './text';

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

function Hero () {
  return (
    <Wrapper>
      <CTAWrapper>
        <JumboLarge
          margin="0 0 0 11.4rem"
        >
          Hello
          <span style={{ color: colors.colors.orange }}>,</span>
          {' '}
          I'm John
          <span style={{ color: colors.colors.orange, margin: '0 0 0 .1rem' }}>:</span>
        </JumboLarge>
        <JumboLarge margin="-2rem 0 0 0">
          Designer
          {' '}
          <span style={{ color: colors.colors.purple, margin: '0 0 0 .4rem' }}>&</span>
          {' '}
          <span style={{ margin: '0 0 0 1.1rem' }}>Developer</span>
        </JumboLarge>
      </CTAWrapper>
      <NavWrapper>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavWrapper>
    </Wrapper>
  );
}

export default Hero;
