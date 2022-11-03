// eslint-disable-next-line no-unused-vars
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import PostLink from '../components/post-link';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "list";
  justify-items: center;
`;

const ListWrapper = styled.section`
  grid-area: list;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: min-content;
  row-gap: 4rem;
  margin: 10rem 0 40vh 0;
  max-width: 800px;
`;

function BlogList ({ data: { allMarkdownRemark: { edges } } }) {
  return (
    <Layout>
      <Wrapper>
        <ListWrapper>
          {edges.map(({
            node: {
              id,
              frontmatter: {
                slug,
                title,
                subtitle,
                tags,
                featuredImage,
                date,
              },
            },
          }) => (
            <PostLink
              key={id}
              title={title}
              subtitle={subtitle}
              slug={slug}
              makeSmall
              tags={tags}
              featuredImage={featuredImage}
              date={date}
            />
          ))}
        </ListWrapper>
      </Wrapper>
    </Layout>
  );
}

export default BlogList;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        sort: {
          order: DESC, fields: [frontmatter___date]
        },
        filter: {
          fileAbsolutePath: {
            regex: "/(blog)/"
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
            tags
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }`;
