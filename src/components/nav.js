// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

import { WindowContext } from '../context/windowContext';

import { Label, NavLink } from './text';
import NavButtons from './nav-buttons';
import BurgerIcon from './burger-icon';
import NavBurger from './nav-burger';

const Wrapper = styled.header`
  z-index: 1000;
  grid-area: nav;
  display: grid;
  grid-template-areas: "nav-left nav-right";
  height: 3em;
  background: ${colors.greys.one};

  @media (max-width: 1400px) {
    height: 2.3rem;
  }
  @media (max-width: 840px) {
    height: 2rem;
  }
  @media (max-width: 580px) {
    height: 1.8rem;
  }
`;

const NavLeft = styled.div`
  grid-area: nav-left;
  display: grid;
  grid-template-areas: "line title";
  grid-template-columns: 80px auto;
  height: inherit;

  @media (max-width: 700px) {
    grid-template-columns: 30px auto;
  }
`;

const LineWrapper = styled.div`
  grid-area: line;
  padding: 0 0 0 2.6rem;
  height: 80vh;

  @media (max-width: 700px) {
    padding: 0 0 0 1rem;
  }
`;

const SideWaysTextWrapper = styled.div`
  transform: translate(-201px, 210px) rotate(270deg);
  width: 25rem;
  justify-items: end;
  text-align: end;
`;

const NavRight = styled.div`
  display: grid;
  justify-items: end;
`;

const easterEggOptions = [
  'ooo trendy sideways letters',
  'oh ho! you found the easter egg',
  'yes, good keep clicking...',
  'is this this end?',
  'i guess not. i\'ll just click once more.',
];

function Nav () {
  const { screenWidth } = useContext(WindowContext);

  const [showNav, setShowNav] = useState(false);
  const [easterEggIndex, setEasterEggIndex] = useState(0);
  const [isBurgerNavShowing, setIsBurgerNavShowing] = useState(false);

  function handleBurgerClick () {
    setIsBurgerNavShowing(!isBurgerNavShowing);
  }

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
          <svg
            viewBox={`0 0 1 ${screenWidth < 600 ? 340 : 400}`}
            height={screenWidth < 600 ? '340px' : '400px'}
            width="1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.5" y1="28" x2="0.5" y2={screenWidth < 600 ? 340 : 400} stroke={colors.colors.orange} />
          </svg>
          <SideWaysTextWrapper>
            <Label onClick={handleClick} style={{ cursor: 'help' }}>{easterEggOptions[easterEggIndex]}</Label>
          </SideWaysTextWrapper>
        </LineWrapper>
        <NavLink margin="0 0 0 0" height="3em" to="/">John McKenna</NavLink>
      </NavLeft>
      <NavRight>
        {showNav && (screenWidth < 800
          ? (
            <>
              <BurgerIcon
                width="2.2rem"
                height="2.2rem"
                margin=".1rem 0 0 0"
                onClick={handleBurgerClick}
                isX={isBurgerNavShowing}
              />
              <NavBurger
                isShowing={isBurgerNavShowing}
                setIsShowing={setIsBurgerNavShowing}
              />
            </>
          )
          : (
            <NavButtons />
          ))}
      </NavRight>
    </Wrapper>
  );
}

export default Nav;
