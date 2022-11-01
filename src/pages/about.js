// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/colors';

import Layout from '../components/layout';
import { JumboSmall, Paragraph } from '../components/text';

const Wrapper = styled.section`
  display: grid;
  margin: 13rem 0 0 30rem;
  grid-template-areas: "who-am-i" "paragraph" "cta-button";
  grid-template-rows: 17rem auto 20rem;
  justify-items: start;
`;

const ParagraphWrapper = styled.div`
  grid-area: paragraph;
  width: 65ch;
  margin: 0 0 0 .5rem;
`;

function About () {
  return (
    <Layout>
      <Wrapper>
        <JumboSmall gridArea="who-am-i">
          Who am I
          <span style={{ color: colors.colors.purple }}>?</span>
        </JumboSmall>
        <ParagraphWrapper>
          <Paragraph lineHeight={2}>
            I was born and raised in Colorado where I subsequently made my way to Penn State University. I studied Sound Design. I had always wanted to live in NYC, so I moved there.
          </Paragraph>
          <Paragraph lineHeight={2}>
            I worked my way through the live enterainment industry eventually landing as a theatrical sound designer. The global pandemic put a kibosh on live shows, so I learned web development.
          </Paragraph>
          <Paragraph lineHeight={2}>
            I love making things. I use my 3D printer and CAD skills to build furinture and various other objects like tiny trashcans. I am most happiest when I’m creating something new.
          </Paragraph>
        </ParagraphWrapper>
      </Wrapper>
    </Layout>
  );
}

export default About;
