// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  z-index: 1000;
  grid-area: nav;
  display: grid;
`;

function Nav () {
  return (
    <Wrapper>
      <h1>nav</h1>
    </Wrapper>
  );
}

export default Nav;
