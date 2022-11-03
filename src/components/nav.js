// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

import { Label, NavLink } from './text';

const Wrapper = styled.header`
  z-index: 1000;
  grid-area: nav;
  display: grid;
  grid-template-areas: "nav-left nav-right";
  height: 3em;
  background: ${colors.greys.one};
`;

const NavLeft = styled.div`
  grid-area: nav-left;
  display: grid;
  grid-template-areas: "line title";
  grid-template-columns: 80px auto;
  height: inherit;
`;

const LineWrapper = styled.div`
  grid-area: line;
  padding: 0 0 0 2rem;
  height: 80vh;
`;

const SideWaysTextWrapper = styled.div`
  transform: translate(-193px, 210px) rotate(270deg);
  width: 25rem;
  justify-items: end;
  text-align: end;
`;

const NavRight = styled.div`
  display: grid;
  justify-items: end;
`;

const NavWrapper = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  grid-column-gap: 2rem;
  margin: 0 2rem 0 0;
`;

const easterEggOptions = [
  'ooo trendy sideways letters',
  'oh ho! you found the easter egg',
  'yes, good keep clicking...',
  'is this this end?',
  'i guess not. i\'ll just click once more.',
];

function Nav () {
  const [showNav, setShowNav] = useState(false);
  const [easterEggIndex, setEasterEggIndex] = useState(0);

  function handleClick () {
    const newIndex = (easterEggIndex + 1) % easterEggOptions.length;
    setEasterEggIndex(newIndex);
  }

  useEffect(() => {
    if (window !== undefined) {
      const page = window.location.pathname;

      if (page !== '/') {
        setShowNav(true);
      }
    }
  }, []);

  return (
    <Wrapper>
      <NavLeft>
        <LineWrapper>
          <svg viewBox="0 0 20 100" height="400px" width="80px" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="7" x2="2" y2="100" stroke={colors.colors.orange} strokeWidth=".25" />
          </svg>
          <SideWaysTextWrapper>
            <Label onClick={handleClick} style={{ cursor: 'help' }}>{easterEggOptions[easterEggIndex]}</Label>
          </SideWaysTextWrapper>
        </LineWrapper>
        <NavLink margin="0 0 0 0" height="3em" to="/">John McKenna</NavLink>
      </NavLeft>
      <NavRight>
        {showNav && (
        <NavWrapper>
          <NavLink margin="0 0 0 0" to="/work">Work</NavLink>
          <NavLink margin="0 0 0 0" to="/blog">Blog</NavLink>
          <NavLink margin="0 0 0 0" to="/about">About</NavLink>
          <NavLink margin="0 0 0 0" to="/contact">Contact</NavLink>
        </NavWrapper>
        )}
      </NavRight>
    </Wrapper>
  );
}

export default Nav;
