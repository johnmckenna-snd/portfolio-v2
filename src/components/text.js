import styled from 'styled-components';
import { Link } from 'gatsby';

import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

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
  text-shadow: 0 4px 0 ${colors.colors.green};
  ${mediaQuery}
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
  text-shadow: 0 4px 0 ${colors.colors.green};
  ${mediaQuery}
`;

export const Heading2 = styled.h2`
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
`;

export const Heading3 = styled.h3`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.mono.fontFamily};
  font-weight: ${fonts.mono.bold.weight};
  font-style: ${fonts.mono.bold.style};
  font-size: 2rem;
  color: ${colorLighter};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  text-decoration: none;
  height: ${height};
  ${mediaQuery}
`;

export const Paragraph = styled.p`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.regular.fontFamily};
  font-weight: ${fonts.regular.regular.weight};
  font-style: ${fonts.regular.regular.style};
  font-size: 1rem;
  color: ${color};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
  transform: ${transform};
  ${mediaQuery}
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
`;
