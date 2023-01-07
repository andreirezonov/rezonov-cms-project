module.exports = {
  siteMetadata: {
    title: "Monster Hunter",
    description: "Monster Hunter is an action role-playing game franchise developed and published by Capcom.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://monster-hunter.local/graphql",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Barlow',
            weights: ['100', '400', '700']
          },
        ]
      }
    }
  ],
};
