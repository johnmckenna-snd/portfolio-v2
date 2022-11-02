// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { colors } from '../styles/colors';

import { Heading1Large, Heading1Small, Label } from './text';

import Arrow from '../svg/PostLinkArrow.svg';

const Wrapper = styled(Link)`
  display: grid;
  grid-template-areas: "title" "subtitle" "button";
  grid-template-rows: 6rem 1rem 3.5rem;
  grid-row-gap: 1rem;
  text-decoration: none;
`;

const ArrowWrapper = styled.div`
  width: auto;
  align-self: end;

  path {
    fill: ${(props) => (props.isHovered ? colors.colors.orange : colors.greys.four)};
  }

`;

function PostLink ({ title, subtitle, slug, makeSmall }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      to={slug}
    >
      {makeSmall
        ? <Heading1Small>{title}</Heading1Small>
        : <Heading1Large>{title}</Heading1Large>}
      <Label>
        {subtitle}
      </Label>
      <ArrowWrapper to={slug} isHovered={isHovered}>
        <Arrow />
      </ArrowWrapper>
    </Wrapper>
  );
}

export default PostLink;
