import styled from 'styled-components';

import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

function gridArea (props) { return props.gridArea || ''; }
function borderTop (props) { return props.borderTop || 'none'; }
function borderBottom (props) { return props.borderBottom || 'none'; }
function color (props) { return props.color || colors.greys.seven; }
function colorLighter (props) { return props.color || colors.greys.six; }
function margin (props) { return props.margin || '.4em 0 .3m 0'; }
function padding (props) { return props.padding || '.1em 0 .1em 0'; }
function justifySelf (props) { return props.justifySelf || ''; }
function alignSelf (props) { return props.alignSelf || ''; }
function lineHeight (props) { return props.lineHeight || 1; }

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
`;

export const JumboSmall = styled.h1`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.heading.fontFamily};
  font-weight: ${fonts.heading.blackItalic.weight};
  font-style: ${fonts.heading.blackItalic.style};
  font-size: 6em;
  color: ${color};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
`;

export const Heading1Large = styled.h1`
  grid-area: ${gridArea};
  border-top: ${borderTop};
  border-bottom: ${borderBottom};
  font-family: ${fonts.heading.fontFamily};
  font-weight: ${fonts.heading.blackItalic.weight};
  font-style: ${fonts.heading.blackItalic.style};
  font-size: 3rem;
  color: ${color};
  margin: ${margin};
  padding: ${padding};
  justify-self: ${justifySelf};
  align-self: ${alignSelf};
  line-height: ${lineHeight};
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
`;

export const NavLink = styled.a`
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

  &:hover {
    color: ${colors.colors.orange};
  }
`;
