/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `CE - Portfolio`,
    description: `A webpage to showcase my skills.`,
    author: `@official-carledwardfp`,
  },
  plugins: [
    `gatsby-image`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./static/images/photography/`,
      },
    },
  ],
  pathPrefix: `/portfolio-v2`,
}
