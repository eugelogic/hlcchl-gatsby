module.exports = {
  siteMetadata: {
    title: `Heath Lodge Community Centre - London`,
    description: `Lorem ipsum dolor sit amet.`,
    author: `@EugeneMolari`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#189960`,
        theme_color: `#189960`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-sass`,
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 740,
                        linkImagesToOriginal: false,
                    },
                },
            ],
        },
    },
    {
        resolve: `gatsby-plugin-favicon`,
        options: {
          logo: "./src/images/favicon.png",
          icons: {
              android: true,
              appleIcon: true,
              appleStartup: true,
              coast: false,
              favicons: true,
              firefox: true,
              opengraph: false,
              twitter: false,
              yandex: false,
              windows: false
            },
        },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-39423737-3",
        head: true,
      },
    },
  ],
}
