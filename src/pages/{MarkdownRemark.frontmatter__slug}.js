// eslint-disable-next-line no-unused-vars
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import RehypeReact from 'rehype-react';

import { Heading1Large, Label, Heading2, Paragraph, Heading3, BlogLink } from '../components/text';
import Layout from '../components/layout';
import { colors } from '../styles/colors';

const ModifiedHeading2 = styled(Heading2)`
  margin: 4rem 0 2rem 0;
`;

const ModifiedHeading3 = styled(Heading3)`
  margin: 3rem 0 2rem 0;
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
`;

const HeadingWrapper = styled.div`
  grid-area: heading;
  grid-template-areas: "heading-text" "subtitle";
  grid-template-rows: auto 1rem;
  margin: 0 0 4rem 0;
  box-shadow: 4px 4px 0 ${colors.colors.green};
  border: .1rem solid ${colors.greys.seven};
  padding: 0 2rem 2rem 2rem;
`;

const MarkdownWrapper = styled.div`
  grid-area: content;
  margin: 0 0 40vh 2rem;
  max-width: 65ch;
  box-shadow: 4px 4px 0 ${colors.colors.green};
  border: .1rem solid ${colors.greys.seven};
  padding: 0 2rem 2rem 2rem;

  ul {
    list-style: none;
  }

  li::before {
    content: "~ ";
    color: ${colors.colors.orange};
  }

  li {
    margin: 1rem 0 0 0;
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
