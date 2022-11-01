/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-transformer-remark',
      options: { plugins: ['gatsby-remark-component'] },
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
  ],
};
