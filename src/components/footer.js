// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import styled from 'styled-components';

import { WindowContext } from '../context/windowContext';

import { colors } from '../styles/colors';

import { Label, LabelLink } from './ui/text';

const Wrapper = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: end;
  z-index: 1000;
  background: ${colors.greys.one};
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

const LineWrapper = styled.div`
  margin: 0 0 .2rem 0;

  @media (max-width: 1400px) {
    margin: 0 0 .1rem 0;
  }
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
  const { screenWidth } = useContext(WindowContext);

  return (
    <Wrapper>
      <LinkWrapper>
        {footerLinks.map(({ text, link }, i) => (
          <>
            <LabelLink
              key={link}
              href={link}
              margin="0 0 0 0"
            >
              {text}
            </LabelLink>
            {i < footerLinks.length - 1 && <Label key={text} margin="0 0 0 0">-</Label>}
          </>
        ))}
        <LineWrapper>
          <svg
            viewBox={`0 0 ${screenWidth < 600 ? 80 : 250} 1`}
            height="1"
            width={screenWidth < 600 ? '80px' : '250px'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="20" y1="0.5" x2={screenWidth < 600 ? 80 : 250} y2="0.5" stroke={colors.colors.purple} strokeWidth="1" />
          </svg>
        </LineWrapper>

      </LinkWrapper>
    </Wrapper>
  );
}

export default Footer;
