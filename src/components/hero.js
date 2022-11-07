/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { animated, useTransition, config } from 'react-spring';

import { colors } from '../styles/colors';

import { JumboLarge, NavLinkBig } from './text';

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
  const [cta, setCta] = useState([]);

  useEffect(() => {
    const ctaInitial = [
      {
        component: (
          <span>Hello</span>
        ),
      },
    ]
  })
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
        <NavLinkBig to="/work">Work</NavLinkBig>
        <NavLinkBig to="/blog">Blog</NavLinkBig>
        <NavLinkBig to="/about">About</NavLinkBig>
        <NavLinkBig to="/contact">Contact</NavLinkBig>
      </NavWrapper>
    </Wrapper>
  );
}

export default Hero;
