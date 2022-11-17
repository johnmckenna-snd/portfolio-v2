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

  @media (max-width: 1000px) {
    max-width: auto;
    padding: 0 4rem 0 5.4rem;
  }
  @media (max-width: 700px) {
    padding: 0 2rem 0 2rem;
  }
  @media (max-width: 650px) {
    margin: 5rem 0 40vh 0;
  }
`;

function WorkList ({ data: { allMarkdownRemark: { edges } } }) {
  const transition = useTransition(edges, {
    from: {
      transform: `translate3d(0, 100px, 0)`,
      opacity: 0,
    },
    enter: {
      transform: `translate3d(0, 0px, 0)`,
      opacity: 1,
    },
    leave: {
      transform: `translate3d(0, 100px, 0)`,
      opacity: 0,
    },
    trail: 180,
    config: {
      ...config.slow,
      friction: 50,
    },
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
                  tags={tags}
                />
              </animated.div>
            );
          })}
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
          frontmatter: {
            type: { eq: "work" }
          }
        }
      ) {
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
          }
        }
      }
    }
  }`;

export function Head () {
  return (
    <>
      <title>Work - John McKenna</title>
      <meta
        name="description"
        content="John McKenna Portfolio - Work Examples Page"
      />
      <meta property="og:title" content="Work - John McKenna" />
      <meta property="og:description" content="John McKenna Portfolio - Work Examples Page" />
      <meta property="og:url" content="https://www.johnmckenna.io/work" />
      <meta property="og:image" content="https://john-mckenna-portfolio-images.s3.amazonaws.com/john-mckenna-portfolio-open-graph.png" />
      <meta property="og:image:alt" content="John McKenna Portfolio - Work Examples Page" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="John McKenna - Portfolio" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.johnmckenna.io/work" />
      <meta property="twitter:title" content="Work - John McKenna" />
      <meta property="twitter:description" content="John McKenna Portfolio - Work Examples Page" />
      <meta property="twitter:image" content="https://john-mckenna-portfolio-images.s3.amazonaws.com/john-mckenna-portfolio-open-graph.png" />
    </>
  );
}
