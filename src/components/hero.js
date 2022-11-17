/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { animated, useTransition, config, useSpringRef, useChain } from 'react-spring';

import { WindowContext } from '../context/windowContext';

import { colors } from '../styles/colors';

import { JumboLarge, NavLinkBig } from './ui/text';
import useDebounce from '../hooks/useDebounce';

const Wrapper = styled.div`
  display: grid;
  row-gap: 2rem;
  margin: 20vh 0 0 0;
  grid-template-areas: "cta" "nav";
  grid-template-rows: 20rem auto;
  justify-items: center;

  @media (max-width: 1320px) {
    grid-template-rows: 24rem auto;
  }

  @media (max-width: 820px) {
    grid-template-rows: 18rem auto;
  }

  @media (max-width: 450px) {
    grid-template-rows: 14rem auto;
  }
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

  @media (max-width: 1320px) {
    margin: 0 21rem 0 0;
  }

  @media (max-width: 820px) {
    margin: 0 10rem 0 0;
    row-gap: 1rem;
  }

  @media (max-width: 450px) {
    margin: 0 4rem 0 0;
  }

`;

function Hero () {
  const { screenWidth } = useContext(WindowContext);

  const debouncedScreenWidth = useDebounce({ value: screenWidth, delay: 80 });

  const [cta, setCta] = useState([]);
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const ctaInitialBig = [
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

    const ctaInitialSmall = [
      {
        component: (
          <JumboLarge
            margin="0 0 0 11.1rem"
            mediaQuery="
              @media (max-width: 820px) {
                margin: 0 0 0 4.6rem;
              }
              @media (max-width: 580px) {
                margin: 0 0 0 5rem;
              }
            "
          >
            Hello
            <span style={{ color: colors.colors.orange }}>,</span>
          </JumboLarge>
        ),
      },
      {
        component: (
          <JumboLarge
            margin="-2rem 0 0 3.7rem"
            mediaQuery="
              @media (max-width: 820px) {
                margin: -1.5rem 0 0 1rem;
              }
              @media (max-width: 580px) {
                margin: -1.2rem 0 0 1.8rem;
              }
            "
          >
            I'm John
            <span style={{ color: colors.colors.orange, margin: '0 0 0 .1rem' }}>:</span>
          </JumboLarge>
        ),
      },
      {
        component: (
          <JumboLarge
            margin="-2rem 0 0 4.5rem"
            mediaQuery="
              @media (max-width: 820px) {
                margin: -1.5rem 0 0 4.4rem;
              }
              @media (max-width: 580px) {
                margin: -1.2rem 0 0 2rem;
              }
            "
          >
            Designer
          </JumboLarge>
        ),
      },
      {
        component: (
          <JumboLarge
            margin="-2rem 0 0 6.9rem"
            mediaQuery="
              @media (max-width: 820px) {
                margin: -1.5rem 0 0 1rem;
              }
              @media (max-width: 580px) {
                margin: -1.2rem 0 0 .5rem;
              }
            "
          >
            <span style={{ color: colors.colors.purple, margin: '0 0 0 .4rem' }}>&</span>
            {' '}
            <span style={{ margin: '0 0 0 1.1rem' }}>Developer</span>
          </JumboLarge>
        ),
      },
    ];

    if (debouncedScreenWidth) setCta(debouncedScreenWidth < 1320 ? ctaInitialSmall : ctaInitialBig);

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

    if (debouncedScreenWidth) setNavLinks(navLinkInitial);
  }, [debouncedScreenWidth]);

  const ctaApi = useSpringRef();
  const ctaTransition = useTransition(cta, {
    ref: ctaApi,
    from: {
      transform: `translate3d(400px, 0, 0)`,
      opacity: 0,
    },
    enter: {
      transform: `translate3d(0px, 0, 0)`,
      opacity: 1,
    },
    trail: 250,
    config: {
      ...config.slow,
      friction: 50,
    },
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
    trail: 180,
    config: {
      ...config.slow,
      friction: 50,
    },
  });

  useChain([ctaApi, navLinksApi], [0, 1]);

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
