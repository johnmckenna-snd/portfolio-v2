// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

import { NavLink } from './text';

const Wrapper = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  grid-column-gap: 2rem;
  margin: 0 2rem 0 0;
`;

function NavButtons () {
  return (
    <Wrapper>
      <NavLink margin="0 0 0 0" to="/work">Work</NavLink>
      <NavLink margin="0 0 0 0" to="/blog">Blog</NavLink>
      <NavLink margin="0 0 0 0" to="/about">About</NavLink>
      <NavLink margin="0 0 0 0" to="/contact">Contact</NavLink>
    </Wrapper>
  );
}

export default NavButtons;
