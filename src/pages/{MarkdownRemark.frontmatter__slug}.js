// eslint-disable-next-line no-unused-vars
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import RehypeReact from 'rehype-react';

import { Heading1Large, Label, Heading2, Paragraph, Heading3, BlogLink } from '../components/text';
import Layout from '../components/layout';
import { colors } from '../styles/colors';

const ModifiedHeading2 = styled(Heading2)`
  margin: 4rem 0 4rem 0;
`;

const ModifiedHeading3 = styled(Heading3)`
  margin: 2rem 0 2rem 0;
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
  grid-template-areas: "heading" "subtitle" "content";
  grid-template-rows: 10rem 6rem auto;
  margin: 10rem 0 0 0;
`;

const MarkdownWrapper = styled.div`
  grid-area: content;
  margin: 0 0 40rem 0;
  max-width: 65ch;
`;

function Template ({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, htmlAst } = markdownRemark;

  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <Heading1Large gridArea="heading">{frontmatter.title}</Heading1Large>
          <Label color={colors.colors.purple} gridArea="subtitle">{frontmatter.subtitle}</Label>
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
      }
    }
  }`;
