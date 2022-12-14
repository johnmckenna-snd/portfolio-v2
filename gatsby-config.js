/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    title: `John McKenna - Portfolio`,
    siteUrl: `https://www.johnmckenna.io`,
    description: `John McKenna's Portfolio... need I say more?`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-component',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: 'gatsby-remark-highlight-code',
            options: { theme: 'one-light' },
          },
          {
            resolve: 'gatsby-remark-audio',
            options: {
              preload: 'auto',
              loop: false,
              controls: true,
              muted: false,
              autoplay: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        web: [
          {
            name: ['timonium', 'auger-mono', 'dinosaur'],
            file: `https://use.typekit.net/kjq1jkc.css`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/markdown-pages/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/markdown-pages/work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: { rule: { include: /svg\/.*\.svg/ } },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'john-mckenna-portfolio-v2',
        protocol: 'https',
        hostname: 'www.johnmckenna.io',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'John McKenna - Portfolio',
        short_name: 'JDM - Portfolio',
        start_url: '/',
        background_color: '#F2F2F2',
        theme_color: '#BEEE62',
        display: 'standalone',
        icon: 'src/images/icon.png',
        icons: [
          {
            src: 'favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: 'favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: 'logo-192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'logo-512.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
      },
    },
  ],
};
