// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { colors } from '../../styles/colors';

import { Label } from './text';

import { Arrow, ReverseArrow } from './arrow';

const ButtonStyle = styled.button`
  grid-area: ${(props) => props.gridArea || ''};
  height: 4em;
  border: none;
  background: none;
  margin: ${(props) => props.margin || '0 0 0 0'};
  justify-self: ${(props) => props.justifySelf || 'center'};
  align-self: ${(props) => props.alignSelf || 'center'};

  path {
    fill: ${(props) => (props.isHovered ? colors.greys.six : colors.greys.four)};
  }

  &:active {
    path {
      fill: ${colors.colors.green};
    }
  }
`;

const ButtonLinkStyle = styled(Link)`
  grid-area: ${(props) => props.gridArea || ''};
  height: 4em;
  border: none;
  background: none;
  margin: ${(props) => props.margin || '0 0 0 0'};
  justify-self: ${(props) => props.justifySelf || 'center'};
  align-self: ${(props) => props.alignSelf || 'center'};
  text-decoration: none;

  path {
    fill: ${(props) => (props.isHovered ? colors.greys.six : colors.greys.four)};
  }

  &:active {
    path {
      fill: ${colors.colors.green};
    }
  }
`;

export function Button ({ onClick, label, gridArea, margin, justifySelf, alignSelf }) {
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
      justifySelf={justifySelf}
      alignSelf={alignSelf}
    >
      <Label
        margin="0 0 -.5rem -9rem"
        color={isHovered ? colors.colors.orange : colors.greys.six}
      >
        {label}
      </Label>
      <Arrow extend={isHovered} />
    </ButtonStyle>
  );
}

export function ButtonReverse ({ onClick, label, gridArea, margin, justifySelf, alignSelf }) {
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
      justifySelf={justifySelf}
      alignSelf={alignSelf}
    >
      <Label
        margin="0 -5rem -.5rem 0rem"
        color={isHovered ? colors.colors.orange : colors.greys.six}
      >
        {label}
      </Label>
      <ReverseArrow extend={isHovered} />
    </ButtonStyle>
  );
}

export function ButtonReverseLink ({ to, label, gridArea, margin, justifySelf, alignSelf }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ButtonLinkStyle
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
      gridArea={gridArea}
      margin={margin}
      justifySelf={justifySelf}
      alignSelf={alignSelf}
    >
      <Label
        margin="0 0 -.5rem 10rem"
        color={isHovered ? colors.colors.orange : colors.greys.six}
      >
        {label}
      </Label>
      <ReverseArrow extend={isHovered} />
    </ButtonLinkStyle>
  );
}
