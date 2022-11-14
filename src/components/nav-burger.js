// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useTransition, config, useSpringRef, useChain } from 'react-spring';

import { colors } from '../styles/colors';

import { NavLink } from './text';

const Wrapper = styled(animated.nav)`
  position: fixed;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: min-content;
  grid-row-gap: .5rem;
  margin: 3rem 2rem 0 0;
  background-color: ${colors.greys.one};
  box-shadow: 4px 4px 0 ${colors.colors.orange};
  border: .1rem solid ${colors.greys.seven};
  height: 0;
  width: 10rem;
  overflow: hidden;
`;

function NavBurger ({ isShowing, setIsShowing }) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const linksInitial = [
      {
        to: '/work',
        text: 'Work',
        onClick: () => setIsShowing(false),
      },
      {
        to: '/blog',
        text: 'Blog',
        onClick: () => setIsShowing(false),
      },
      {
        to: '/about',
        text: 'About',
        onClick: () => setIsShowing(false),
      },
      {
        to: '/contact',
        text: 'Contact',
        onClick: () => setIsShowing(false),
      },
    ];

    setLinks(linksInitial);
  }, [setIsShowing]);

  const transitionsApi = useSpringRef();
  const transitions = useTransition(isShowing, {
    ref: transitionsApi,
    from: { height: '0px' },
    enter: { height: '215px' },
    leave: { height: '0px' },
    reverse: true,
    config: {
      precision: 0.01,
      friction: 35,
    },
  });

  const linksApi = useSpringRef();
  const linksTrans = useTransition(isShowing ? links : [], {
    ref: linksApi,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    trail: 200 / links.length,
    config: config.default,
    delay: isShowing ? 100 : 0,
    reverse: true,
  });

  useChain(isShowing ? [transitionsApi, linksApi] : [linksApi, transitionsApi], [0, 0.3]);

  return transitions((styles, item) => item && (
    <Wrapper style={styles}>
      {linksTrans((style, i) => (
        <animated.div style={{ margin: '1rem 0 0 0', ...style }}>
          <NavLink
            to={i.to}
            onClick={i.onClick}
            margin="0 1rem 0 1rem"
          >
            {i.text}
          </NavLink>
        </animated.div>
      ))}
    </Wrapper>
  ));
}

export default NavBurger;
