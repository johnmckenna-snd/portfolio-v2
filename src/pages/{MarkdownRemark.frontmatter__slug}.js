// eslint-disable-next-line no-unused-vars
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import RehypeReact from 'rehype-react';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

import { Heading1Large, Label, Heading2, Paragraph, Heading3, BlogLink, Heading4 } from '../components/text';
import Layout from '../components/layout';

deckDeckGoHighlightElement();

const ModifiedHeading2 = styled(Heading2)`
  margin: 4rem 0 2rem 0;
`;

const ModifiedHeading3 = styled(Heading3)`
  margin: 3rem 0 2rem 0;
`;

const ModifiedHeading4 = styled(Heading4)`
  margin: 2rem 0 1rem 0;
`;

const ModifiedParagraph = styled(Paragraph)`
  line-height: 2;
`;

const ModifiedBlogLink = styled(BlogLink)`
`;

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: ModifiedHeading2,
    h2: ModifiedHeading3,
    h3: ModifiedHeading4,
    p: ModifiedParagraph,
    a: ModifiedBlogLink,
  },
}).Compiler;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: content;
  align-items: center;
`;

const ContentWrapper = styled.section`
  grid-area: content;
  display: grid;
  grid-template-areas: "heading" "content";
  grid-template-rows: auto auto;
  margin: 10rem 0 0 0;
  max-width: 800px;

  @media (max-width: 1000px) {
    margin: 10rem 2rem 0 5.5rem;
  }
  @media (max-width: 700px) {
    margin: 10rem 2rem 0 2.2rem;
  }
`;

const HeadingWrapper = styled.div`
  grid-area: heading;
  grid-template-areas: "heading-text" "subtitle";
  grid-template-rows: auto 1rem;
  margin: 0 0 4rem 0;
  box-shadow: 4px 4px 0 ${colors.colors.green};
  border: .1rem solid ${colors.greys.seven};
  padding: 0 2rem 2rem 2rem;

  @media (max-width: 460px) {
    padding: 0 1rem 2rem 1rem;
  }
`;

const MarkdownWrapper = styled.div`
  grid-area: content;
  margin: 0 0 40vh 2rem;
  max-width: 70ch;
  box-shadow: 4px 4px 0 ${colors.colors.green};
  border: .1rem solid ${colors.greys.seven};
  padding: 0 4rem 2rem 4rem;

  @media (max-width: 830px) {
    padding: 0 2rem 2rem 2rem;
    max-width: 70vw;
  }

  @media (max-width: 460px) {
    padding: 0 1rem 2rem 1rem;
    margin: 0 0 40vh 0rem;
  }

  ol, ul {
    line-height: 1.2;
  }

  li {
    font-size: 1.1rem;
    margin: 1rem 0 0 0;
    font-family: ${fonts.regular.fontFamily};
    font-weight: ${fonts.regular.regular.weight};
    font-style: ${fonts.regular.regular.style};

    @media (max-width: 1400px) {
      font-size: 1rem;
    }
  }

  code {
    background-color: ${colors.greys.two};
    color: ${colors.greys.six};
    padding: 0 .5rem 0 .5rem;
    font-family: ${fonts.mono.fontFamily};
    font-weight: ${fonts.mono.light.weight};
    font-style: ${fonts.mono.light.style};
    font-size: .9rem;
    border-radius: 5px;
  }

  deckgo-highlight-code {
    margin: 2rem 0 3rem 0;
    box-shadow: none;
    border: .1rem solid ${colors.greys.seven};
    border-radius: 0px;
    box-shadow: 4px 4px 0 ${colors.colors.orange};
  }
`;

function Template ({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, htmlAst } = markdownRemark;

  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <HeadingWrapper>
            <Heading1Large gridArea="heading-text" lineHeight={1}>{frontmatter.title}</Heading1Large>
            <Label color={colors.colors.purple} gridArea="subtitle" margin="2rem 0 0 0">{frontmatter.subtitle}</Label>
          </HeadingWrapper>
          <MarkdownWrapper>{renderAst(htmlAst)}</MarkdownWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

export default Template;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        subtitle
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }`;
