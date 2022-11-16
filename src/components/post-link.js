// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import { colors } from '../styles/colors';

import { Heading1Large, Heading1Small, Label, Tag } from './ui/text';

import Arrow from '../svg/PostLinkArrow.svg';

const Wrapper = styled(Link)`
  display: grid;
  grid-template-areas: "image" "title" "subtitle" "tags" "button";
  grid-template-rows: auto auto auto min-content 3rem;
  grid-row-gap: 1.5rem;
  text-decoration: none;
  box-shadow: 4px 4px 0 ${colors.colors.green};
  border: .1rem solid ${colors.greys.seven};
  padding: 1rem 1rem 1rem 2rem;

  &:hover {
    border: .1rem solid ${colors.colors.orange};
  }

  &:active {
    box-shadow: 4px 4px 0 ${colors.greys.six};
  }

  @media (max-width: 600px) {
    padding: 0 1rem 0 1rem;
  }
`;

const TagWrapper = styled.div`
  grid-area: tags;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ArrowWrapper = styled.div`
  display: grid;
  width: auto;
  align-self: center;
  justify-items: left;
  margin: 0 1rem 0 0;

  path {
    fill: ${(props) => (props.isHovered ? colors.colors.orange : colors.greys.four)};
  }

  @media (max-width: 400px) {
    width: 50vw;
  }

`;

const GatsbyImageStyled = styled(GatsbyImage)`
  width: 400px;
  justify-self: center;

  @media (max-width: 500px) {
    width: auto;
  }
`;

function PostLink ({ title, subtitle, slug, makeSmall, featuredImage, date, tags }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      to={slug}
    >
      {featuredImage ? (
        <GatsbyImageStyled
          image={featuredImage.childImageSharp.gatsbyImageData}
          alt={title}
        />
      )
        : <div style={{ height: 0 }} />}
      {makeSmall
        ? <Heading1Small lineHeight={1.5}>{title}</Heading1Small>
        : <Heading1Large margin="0 0 0 0">{title}</Heading1Large>}
      <Label color={colors.colors.purple} lineHeight={1.5}>
        {date && (
        <>
          <span style={{ fontWeight: 700 }}>{date}</span>
          {' '}
          -
          {' '}
        </>
        )}
        {subtitle}
      </Label>
      <TagWrapper>
        {tags.map((tag) => (
          <Tag margin="0 0 0 0">{tag}</Tag>
        ))}
      </TagWrapper>
      <ArrowWrapper to={slug} isHovered={isHovered}>
        <Arrow style={{ justifySelf: 'end' }} />
      </ArrowWrapper>
    </Wrapper>
  );
}

export default PostLink;
