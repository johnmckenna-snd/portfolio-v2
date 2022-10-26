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
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        web: [
          {
            name: `timonium`,
            file: `https://use.typekit.net/af/b44746/00000000000000007735f09e/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i8&v=3`,
          },
          {
            name: `auger-mono`,
            file: `https://use.typekit.net/af/801002/00000000000000007735f32c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3`,
          },
          {
            name: `auger-mono`,
            file: `https://use.typekit.net/af/cf6884/00000000000000007735f331/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3`,
          },
          {
            name: `elza-text`,
            file: `https://use.typekit.net/af/d053a5/00000000000000007735f93a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3`,
          },
          {
            name: `elza-text`,
            file: `https://use.typekit.net/af/b462b0/00000000000000007735f939/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3`,
          },
          {
            name: `elza-text`,
            file: `https://use.typekit.net/af/352dfa/00000000000000007735f93d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3`,
          },
          {
            name: `elza-text`,
            file: `https://use.typekit.net/af/9b4894/00000000000000007735f938/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3`,
          },
        ],
      },
    },
  ],
};
