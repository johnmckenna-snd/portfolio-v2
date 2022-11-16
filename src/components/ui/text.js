import styled from 'styled-components';
import { Link } from 'gatsby';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

function gridArea (props) { return props.gridArea || ''; }
function borderTop (props) { return props.borderTop || 'none'; }
function borderBottom (props) { return props.borderBottom || 'none'; }
function color (props) { return props.color || colors.greys.seven; }
function colorLighter (props) { return props.color || colors.greys.six; }
function margin (props) { return props.margin || '.4em 0 .3rem 0'; }
function padding (props) { return props.padding || '.1em 0 .1rem 0'; }
function justifySelf (props) { return props.justifySelf || ''; }
function alignSelf (props) { return props.alignSelf || ''; }
function lineHeight (props) { return props.lineHeight || 1; }
function mediaQuery (props) { return props.mediaQuery || null; }
function transform (props) { return props.transform || ''; }
function height (props) { return props.height || ''; }

export const JumboLarge = styled.h1`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.heading.fontFamily};
  font-weight: ${fonts.heading.blackItalic.weight};
  font-style: ${fonts.heading.blackItalic.style};
  font-size: 8rem;
  color: ${color};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  ${mediaQuery}

  @media (max-width: 1490px) {
    font-size: 7rem;
  }
  @media (max-width: 820px) {
    font-size: 5rem;
  }
  @media (max-width: 580px) {
    font-size: 4rem;
  }
  @media (max-width: 420px) {
    font-size: 3.4rem;
  }
`;

export const JumboSmall = styled.h1`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.heading.fontFamily};
  font-weight: ${fonts.heading.blackItalic.weight};
  font-style: ${fonts.heading.blackItalic.style};
  font-size: 6rem;
  color: ${color};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  ${mediaQuery}

  @media (max-width: 1400px) {
    font-size: 5rem;
  }
  @media (max-width: 820px) {
    font-size: 4rem;
  }
  @media (max-width: 580px) {
    font-size: 3rem;
  }
`;

export const Heading1Large = styled.h1`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.heading.fontFamily};
  font-weight: ${fonts.heading.blackItalic.weight};
  font-style: ${fonts.heading.blackItalic.style};
  font-size: 4rem;
  color: ${color};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  ${mediaQuery}

  @media (max-width: 1400px) {
    font-size: 3.5rem;
  }
  @media (max-width: 820px) {
    font-size: 3.2rem;
  }
  @media (max-width: 580px) {
    font-size: 2.9rem;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

export const Heading1Small = styled.h1`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.heading.fontFamily};
  font-weight: ${fonts.heading.blackItalic.weight};
  font-style: ${fonts.heading.blackItalic.style};
  font-size: 2.5rem;
  color: ${color};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  ${mediaQuery}

  @media (max-width: 1400px) {
    font-size: 2rem;
  }

  @media (max-width: 820px) {
    font-size: 1.8rem;
  }
  @media (max-width: 580px) {
    font-size: 1.6rem;
  }
`;

export const Heading2 = styled.h2`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.mono.fontFamily};
  font-weight: ${fonts.mono.bold.weight};
  font-style: ${fonts.mono.bold.style};
  font-size: 2.5rem;
  color: ${color};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  text-decoration: none;
  height: ${height};
  ${mediaQuery}

  @media (max-width: 1400px) {
    font-size: 2rem;
  }
  @media (max-width: 820px) {
    font-size: 1.8rem;
  }
  @media (max-width: 580px) {
    font-size: 1.6rem;
  }
`;

export const Heading3 = styled.h3`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.mono.fontFamily};
  font-weight: ${fonts.mono.bold.weight};
  font-style: ${fonts.mono.bold.style};
  font-size: 2rem;
  color: ${color};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  text-decoration: none;
  height: ${height};
  ${mediaQuery}

  @media (max-width: 1400px) {
    font-size: 1.7rem;
  }
  @media (max-width: 820px) {
    font-size: 1.4rem;
  }
  @media (max-width: 580px) {
    font-size: 1.2rem;
  }
`;

export const Heading4 = styled.h4`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.mono.fontFamily};
  font-weight: ${fonts.mono.bold.weight};
  font-style: ${fonts.mono.bold.style};
  font-size: 1.5rem;
  color: ${color};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  text-decoration: none;
  height: ${height};
  ${mediaQuery}

  @media (max-width: 1400px) {
    font-size: 1.2rem;
  }

  @media (max-width: 820px) {
    font-size: 1.1rem;
  }
`;

export const Paragraph = styled.p`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.regular.fontFamily};
  font-weight: ${fonts.regular.regular.weight};
  font-style: ${fonts.regular.regular.style};
  font-size: 1.1rem;
  color: ${color};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  transform: ${transform};
  ${mediaQuery}

  @media (max-width: 1400px) {
    font-size: 1rem;
  }
`;

export const Label = styled.p`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.mono.fontFamily};
  font-weight: ${fonts.mono.light.weight};
  font-style: ${fonts.mono.light.style};
  font-size: 1rem;
  color: ${colorLighter};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  transform: ${transform};
  ${mediaQuery}

  @media (max-width: 1400px) {
    font-size: .9rem;
  }
`;

export const NavLink = styled(Link)`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.mono.fontFamily};
  font-weight: ${fonts.mono.bold.weight};
  font-style: ${fonts.mono.bold.style};
  font-size: 2.2rem;
  color: ${colorLighter};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  text-decoration: none;
  height: ${height};
  ${mediaQuery}

  &:hover {
    color: ${colors.colors.orange};
  }

  @media (max-width: 1400px) {
    font-size: 2rem;
  }
  @media (max-width: 840px) {
    font-size: 1.7rem;
  }
  @media (max-width: 580px) {
    font-size: 1.6rem;
  }
`;

export const NavLinkBig = styled(Link)`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.mono.fontFamily};
  font-weight: ${fonts.mono.bold.weight};
  font-style: ${fonts.mono.bold.style};
  font-size: 2.5rem;
  color: ${colorLighter};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  text-decoration: none;
  height: ${height};
  ${mediaQuery}

  &:hover {
    color: ${colors.colors.orange};
  }

  @media (max-width: 1400px) {
    font-size: 2.2rem;
  }

  @media (max-width: 820px) {
    font-size: 1.9rem;
  }
`;

export const BlogLink = styled.a`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.regular.fontFamily};
  font-weight: ${fonts.regular.regular.weight};
  font-style: ${fonts.regular.regular.style};
  font-size: 1rem;
  color: ${colors.colors.orange};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  transform: ${transform};
  ${mediaQuery}

  &:hover {
    color: ${colors.colors.purple};
  }
`;

export const LabelLink = styled.a`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.mono.fontFamily};
  font-weight: ${fonts.mono.light.weight};
  font-style: ${fonts.mono.light.style};
  font-size: 1rem;
  color: ${colorLighter};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  transform: ${transform};
  text-decoration: none;
  ${mediaQuery}

  &:hover {
    color: ${colors.colors.orange};
  }

  @media (max-width: 1400px) {
    font-size: .9rem;
  }

  @media (max-width: 820px) {
    font-size: .8rem;
  }
`;

export const Tag = styled.p`
  grid-area: ${gridArea};
  border: 1px solid ${colors.greys.seven};
  font-family: ${fonts.mono.fontFamily};
  font-weight: ${fonts.mono.light.weight};
  font-style: ${fonts.mono.light.style};
  font-size: 1rem;
  white-space: nowrap;
  color: ${colors.greys.seven};
  background-color: ${colors.greys.one};
  text-align: center;
  margin: ${margin};
  padding: .4rem 1rem .4rem 1rem;
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  transform: ${transform};
  ${mediaQuery}

  @media (max-width: 1400px) {
    font-size: .9rem;
  }
`;
