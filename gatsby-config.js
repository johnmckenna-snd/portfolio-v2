/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
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
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        web: [
          {
            name: ['timonium', 'auger-mono', 'elza-text'],
            file: `https://use.typekit.net/kjq1jkc.css`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
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
  ],
};
