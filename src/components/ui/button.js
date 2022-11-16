// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/colors';

import { Label } from './text';

import Arrow from '../../svg/PostLinkArrow.svg';
import ReverseArrow from '../../svg/ReversePostLinkArrow.svg';

const ButtonStyle = styled.button`
  grid-area: ${(props) => props.gridArea || ''};
  height: 4em;
  border: none;
  background: none;
  margin: ${(props) => props.margin || '0 0 0 0'};

  path {
    fill: ${(props) => (props.isHovered ? colors.greys.six : colors.greys.four)};
  }

  &:active {
    path {
      fill: ${colors.colors.green};
    }
  }
`;

export function Button ({ onClick, label, gridArea, margin }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleClick (e) {
    e.preventDefault();
    onClick();
  }

  return (
    <ButtonStyle
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
      gridArea={gridArea}
      margin={margin}
    >
      <Label
        margin="0 0 -.5rem -9rem"
        color={isHovered ? colors.colors.orange : colors.greys.six}
      >
        {label}
      </Label>
      <Arrow />
    </ButtonStyle>
  );
}

export function ButtonReverse ({ onClick, label, gridArea, margin }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleClick (e) {
    e.preventDefault();
    onClick();
  }

  return (
    <ButtonStyle
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
      gridArea={gridArea}
      margin={margin}
    >
      <Label
        margin="0 -5rem -.5rem 0rem"
        color={isHovered ? colors.colors.orange : colors.greys.six}
      >
        {label}
      </Label>
      <ReverseArrow />
    </ButtonStyle>
  );
}
