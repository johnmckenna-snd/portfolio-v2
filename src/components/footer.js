// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/colors';

import { Label, LabelLink } from './text';

const Wrapper = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: end;
`;

const LinkWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  grid-column-gap: 1rem;
  justify-items: end;
  align-items: end;
  margin: 0 1.5rem .8rem 0;
`;

const footerLinks = [
  {
    text: 'github',
    link: 'https://github.com/johnmckenna-snd',
  },
  {
    text: 'linkedin',
    link: 'https://www.linkedin.com/in/john-d-mckenna/',
  },
  {
    text: 'flikr',
    link: 'https://www.flickr.com/photos/194780418@N04/',
  },
];

function Footer () {
  return (
    <Wrapper>
      <LinkWrapper>
        {footerLinks.map(({ text, link }, i) => (
          <>
            <LabelLink
              href={link}
              margin="0 0 0 0"
            >
              {text}
            </LabelLink>
            {i < footerLinks.length - 1 && <Label margin="0 0 0 0">-</Label>}
          </>
        ))}
        <svg
          viewBox="0 0 50 4"
          height="16px"
          width="250px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="2" x2="100" y2="2" stroke={colors.colors.purple} strokeWidth=".25" />
        </svg>
      </LinkWrapper>
    </Wrapper>
  );
}

export default Footer;
