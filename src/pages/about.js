// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/colors';

import Layout from '../components/layout';
import { JumboSmall, Paragraph } from '../components/text';

const Wrapper = styled.section`
  display: grid;
  grid-template-areas: "content";
  justify-items: center;
`;

const ContentWrapper = styled.div`
  grid-area: content;
  display: grid;
  grid-template-areas: "who-am-i" "paragraph" "cta-button";
  grid-template-rows: 14rem 30rem auto;
  margin: 13rem 0 0 0;
`;

const ParagraphWrapper = styled.div`
  grid-area: paragraph;
  width: 65ch;
  margin: 0 0 0 .6rem;
  box-shadow: 4px 4px 0 ${colors.colors.green};
  border: .1rem solid ${colors.greys.seven};
  padding: 1rem 2rem 2rem 2rem;
`;

function About () {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <JumboSmall gridArea="who-am-i">
            Who am I
            <span style={{ color: colors.colors.purple }}>?</span>
          </JumboSmall>
          <ParagraphWrapper>
            <Paragraph lineHeight={2}>
              I was born and raised in Colorado where I subsequently made my way to Penn State University. I studied Sound Design. I had always wanted to live in NYC, so I moved there.
            </Paragraph>
            <Paragraph lineHeight={2} margin="2rem 0 0 0">
              I worked my way through the live enterainment industry eventually landing as a theatrical sound designer. The global pandemic put a kibosh on live shows, so I learned web development.
            </Paragraph>
            <Paragraph lineHeight={2} margin="2rem 0 0 0">
              I love making things. I use my 3D printer and CAD skills to build furniture and various other objects like tiny trashcans. I am most happiest when I’m creating something new.
            </Paragraph>
          </ParagraphWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

export default About;
