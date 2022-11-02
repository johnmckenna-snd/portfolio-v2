// eslint-disable-next-line no-unused-vars
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PostLink from '../components/post-link';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "list";
`;

const ListWrapper = styled.section`
  grid-area: list;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: min-content;
  row-gap: 4rem;
  margin: 10rem 0 0 30rem;
  max-width: 800px;
`;

function WorkList ({ data: { allMarkdownRemark: { edges } } }) {
  return (
    <Layout>
      <Wrapper>
        <ListWrapper>
          {edges.map(({ node: { id, frontmatter: { slug, title, subtitle } } }) => (
            <PostLink
              key={id}
              title={title}
              subtitle={subtitle}
              slug={slug}
            />
          ))}
        </ListWrapper>
      </Wrapper>
    </Layout>
  );
}

export default WorkList;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        sort: {
          order: DESC, fields: [frontmatter___date]
        },
        filter: {
          fileAbsolutePath: {
            regex: "/(work)/"
          }
        }
      ) {
      nodes {
        fileAbsolutePath
      }
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            subtitle
          }
        }
      }
    }
  }`;
