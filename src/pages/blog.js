// eslint-disable-next-line no-unused-vars
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { animated, useTransition, config } from 'react-spring';

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
  const transition = useTransition(edges, {
    from: {
      transform: `translate3d(0, 200px, 0)`,
      opacity: 0,
    },
    enter: {
      transform: `translate3d(0, 0px, 0)`,
      opacity: 1,
    },
    leave: {
      transform: `translate3d(0, 200px, 0)`,
      opacity: 0,
    },
    trail: 250,
    config: config.slow,
    delay: 100,
  });
  return (
    <Layout>
      <Wrapper>
        <ListWrapper>
          {transition((styles, item) => {
            const {
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
            } = item;

            return (
              <animated.div style={{ ...styles }}>
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
              </animated.div>
            );
          })}
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
