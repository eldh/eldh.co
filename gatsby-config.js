module.exports = {
  siteMetadata: {
    title: 'eldh.co',
    blogTitle: 'eldh.co blog',
    author: 'Andreas Eldh',
    description: "I'm Andreas. I make things on the internet.",
    siteUrl: 'https://eldh.co/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'eldh.co',
        short_name: 'eldh.co',
        start_url: '.',
        background: '#000',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: './src/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',

        // WebApp Manifest Configuration
        appName: 'eldh.co',
        appDescription: null,
        developerName: 'Andreas Eldh',
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#000',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
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
          windows: false,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
  ],
}
