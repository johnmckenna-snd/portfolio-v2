/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { animated, useTransition, config, useSpringRef, useChain } from 'react-spring';

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
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const ctaInitial = [
      {
        component: (
          <JumboLarge
            margin="0 0 0 11.4rem"
          >
            Hello
            <span style={{ color: colors.colors.orange }}>,</span>
            {' '}
            I'm John
            <span style={{ color: colors.colors.orange, margin: '0 0 0 .1rem' }}>:</span>
          </JumboLarge>
        ),
      },
      {
        component: (
          <JumboLarge margin="-2rem 0 0 0">
            Designer
            {' '}
            <span style={{ color: colors.colors.purple, margin: '0 0 0 .4rem' }}>&</span>
            {' '}
            <span style={{ margin: '0 0 0 1.1rem' }}>Developer</span>
          </JumboLarge>
        ),
      },
    ];

    setCta(ctaInitial);

    const navLinkInitial = [
      {
        name: 'Work',
        link: '/work',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ];

    setNavLinks(navLinkInitial);
  }, []);

  const ctaApi = useSpringRef();
  const ctaTransition = useTransition(cta, {
    ref: ctaApi,
    from: {
      transform: `translate3d(200px, 0, 0)`,
      opacity: 0,
    },
    enter: {
      transform: `translate3d(0px, 0, 0)`,
      opacity: 1,
    },
    leave: {
      transform: `translate3d(100px, 0, 0)`,
      opacity: 0,
    },
    trail: 250,
    config: config.slow,
  });

  const navLinksApi = useSpringRef();
  const navLinksTransition = useTransition(navLinks, {
    ref: navLinksApi,
    from: {
      transform: `translate3d(0, 100px, 0)`,
      opacity: 0,
    },
    enter: {
      transform: `translate3d(0, 0px, 0)`,
      opacity: 1,
    },
    leave: {
      transform: `translate3d(0, 100px, 0)`,
      opacity: 0,
    },
    trail: 180,
    config: config.slow,
    delay: 500,
  });

  useChain([ctaApi, navLinksApi], [0, 0.2]);

  return (
    <Wrapper>
      <CTAWrapper>
        {ctaTransition((styles, item) => (
          <animated.div style={{ ...styles }}>
            {item.component}
          </animated.div>
        ))}
      </CTAWrapper>
      <NavWrapper>
        {navLinksTransition((styles, item) => (
          <animated.div style={{ ...styles }}>
            <NavLinkBig to={item.link}>{item.name}</NavLinkBig>
          </animated.div>
        ))}
      </NavWrapper>
    </Wrapper>
  );
}

export default Hero;
