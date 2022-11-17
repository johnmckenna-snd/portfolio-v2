// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/colors';

import Layout from '../components/layout';
import { JumboSmall, Paragraph } from '../components/ui/text';

const Wrapper = styled.section`
  display: grid;
  grid-template-areas: "content";
  justify-items: center;
`;

const ContentWrapper = styled.div`
  grid-area: content;
  display: grid;
  grid-template-areas: "who-am-i" "paragraph" "cta-button";
  grid-template-rows: 14rem min-content auto;
  margin: 13rem 0 0 0;

  @media (max-width: 1600px) {
    margin: 8rem 0 0 0;
  }
  @media (max-width: 820px) {
    grid-template-rows: 10rem min-content  auto;
    margin: 8rem 2rem 0 5.5rem;
  }
  @media (max-width: 700px) {
    grid-template-rows: 10rem min-content auto;
    margin: 8rem 2rem 0 1.8rem;
  }
  @media (max-width: 580px) {
    grid-template-rows: 7rem min-content auto;
    margin: 8rem 2rem 0 1.8rem;
  }
`;

const ParagraphWrapper = styled.div`
  grid-area: paragraph;
  width: 65ch;
  margin: 0 0 0 .6rem;
  box-shadow: 4px 4px 0 ${colors.colors.green};
  border: .1rem solid ${colors.greys.seven};
  padding: 1rem 2rem 2rem 2rem;

  @media (max-width: 820px) {
    max-width: 65ch;
    width: auto;
  }
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
              I was born and raised in the mountains of Colorado. I subsequently proceeded to Penn State University, majoring in Sound Design. After college, I moved to NYC to live and work.
            </Paragraph>
            <Paragraph lineHeight={2} margin="2rem 0 0 0">
              I worked my way through the live entertainment industry; eventually, I landed as a theatrical sound designer with Broadway credits. The global pandemic put a kibosh on live shows, so I learned full-stack development.
            </Paragraph>
            <Paragraph lineHeight={2} margin="2rem 0 0 0">
              I love designing and creating things. Using my  3d printer and CAD skills, I developed a furniture line and other products like tiny trashcans. I am happiest when I’m creating something new, physical or digital.
            </Paragraph>
          </ParagraphWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

export default About;

export function Head () {
  return (
    <>
      <title>About - John McKenna</title>
      <meta
        name="description"
        content="John McKenna Portfolio - About Page"
      />
      <meta property="og:title" content="About - John McKenna" />
      <meta property="og:description" content="John McKenna Portfolio - About Page" />
      <meta property="og:url" content="https://www.johnmckenna.io/about" />
      <meta property="og:image" content="https://john-mckenna-portfolio-images.s3.amazonaws.com/john-mckenna-portfolio-open-graph.png" />
      <meta property="og:image:alt" content="John McKenna Portfolio - About Page" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="John McKenna - Portfolio" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.johnmckenna.io/about" />
      <meta property="twitter:title" content="About - John McKenna" />
      <meta property="twitter:description" content="John McKenna Portfolio - About Page" />
      <meta property="twitter:image" content="https://john-mckenna-portfolio-images.s3.amazonaws.com/john-mckenna-portfolio-open-graph.png" />
    </>
  );
}
