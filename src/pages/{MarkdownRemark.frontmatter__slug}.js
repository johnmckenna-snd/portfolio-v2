// eslint-disable-next-line no-unused-vars
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import RehypeReact from 'rehype-react';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

import { Heading1Large, Label, Heading2, Paragraph, Heading3, BlogLink, Heading4, Tag } from '../components/ui/text';
import Layout from '../components/layout';
import { ButtonReverseLink } from '../components/ui/button';

deckDeckGoHighlightElement();

const ModifiedHeading2 = styled(Heading2)`
  margin: 4rem 0 2rem 0;
`;

const ModifiedHeading3 = styled(Heading3)`
  margin: 3rem 0 2rem 0;
`;

const ModifiedHeading4 = styled(Heading4)`
  margin: 2rem 0 .5rem 0;
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
  grid-template-areas: "back" "heading" "content" "back-bottom";
  grid-template-rows: 2rem auto auto 2rem;
  margin: 10rem 0 40vh 0;
  max-width: 800px;
  grid-row-gap: 4rem;

  @media (max-width: 1000px) {
    margin: 10rem 2rem 40vh 5.5rem;
  }
  @media (max-width: 700px) {
    margin: 10rem 2rem 40vh 2.2rem;
  }
`;

const HeadingWrapper = styled.div`
  display: grid;
  grid-area: heading;
  grid-template-areas: "heading-text" "subtitle" "tags";
  grid-template-rows: min-content 1rem min-content;
  margin: 0 0 0 0;
  box-shadow: 4px 4px 0 ${colors.colors.green};
  border: .1rem solid ${colors.greys.seven};
  padding: 0 2rem 2rem 2rem;
  grid-row-gap: 2rem;

  @media (max-width: 460px) {
    padding: 0 1rem 2rem 1rem;
  }
`;

const TagWrapper = styled.div`
  grid-area: tags;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const MarkdownWrapper = styled.div`
  grid-area: content;
  margin: 0 0 0 2rem;
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
    margin: 0 0 0 0rem;
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

  audio {
    box-shadow: 4px 4px 0 ${colors.colors.orange};
    background-color: ${colors.greys.seven};

    @media (max-width: 400px) {
      width: 240px;
    }
  }
  audio::-webkit-media-controls-panel {
    background-color: ${colors.greys.one};
  }
  audio::-webkit-media-controls-enclosure {
    border: .1rem solid ${colors.greys.seven};
    border-radius: 0;
  }
`;

function Template ({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, htmlAst } = markdownRemark;

  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <ButtonReverseLink
            to={frontmatter.slug.includes('work') ? '../../work' : '../../blog'}
            label="Back!"
            gridArea="back"
            justifySelf="left"
          />
          <HeadingWrapper>
            <Heading1Large gridArea="heading-text" lineHeight={1}>{frontmatter.title}</Heading1Large>
            <Label color={colors.colors.purple} gridArea="subtitle" margin="0 0 0 0">{frontmatter.subtitle}</Label>
            <TagWrapper>
              {frontmatter.tags.map((tag) => (
                <Tag margin="0 0 0 0">{tag}</Tag>
              ))}
            </TagWrapper>
          </HeadingWrapper>
          <MarkdownWrapper>{renderAst(htmlAst)}</MarkdownWrapper>
          <ButtonReverseLink
            to={frontmatter.slug.includes('work') ? '../../work' : '../../blog'}
            label="Back I Say!"
            gridArea="back-bottom"
            justifySelf="left"
          />
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

export default Template;

export const pageQuery = graphql`
  query(
    $id: String!
    ) {
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

export function Head ({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <>
      <title>{`John McKenna -${frontmatter.title}`}</title>
      <meta
        name="description"
        content={frontmatter.subtitle}
      />
      <meta property="og:title" content={frontmatter.title} />
      <meta property="og:description" content={frontmatter.subtitle} />
      <meta property="og:url" content={`https://www.johnmckenna.io/${location.pathname}`} />
      <meta property="og:image" content="https://john-mckenna-portfolio-images.s3.amazonaws.com/john-mckenna-portfolio-open-graph.png" />
      <meta property="og:image:alt" content={frontmatter.subtitle} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="John McKenna - Portfolio" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://www.johnmckenna.io/${location.pathname}`} />
      <meta property="twitter:title" content={frontmatter.title} />
      <meta property="twitter:description" content={frontmatter.subtitle} />
      <meta property="twitter:image" content="https://john-mckenna-portfolio-images.s3.amazonaws.com/john-mckenna-portfolio-open-graph.png" />
    </>
  );
}
