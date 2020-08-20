const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://bootstrap-makeup.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphql-engine-cdn.bootstrap-makeup.io/learn-bootstrap-makeup/assets/homepage/brand.svg',
    logoLink: 'https://bootstrap-makeup.io/learn/',
    title: "<a href='https://bootstrap-makeup.io/learn/'> Bootstrap Makeup </a>",
    githubUrl: 'https://github.com/bootstrap-makeup/gatsby-gitbook-boilerplate',
    twitterUrl: 'https://twitter.com/',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: 'nuyt',
      algoliaAppId: 'NR80I5D7IL',
      algoliaSearchKey: 'd49c2832268f5c4090ab97ca3174e2ce',
      algoliaAdminKey: '57b260898b461463aa7c2ddba15ed38a',
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'bootstrap-makeup', link: 'https://bootstrap-makeup.io' }],
    frontline: false,
    ignoreIndex: true,
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | bootstrap-makeup',
    description: 'Documentation built with mdx. Powering bootstrap-makeup.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/bootstrap-makeup/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://graphql-engine-cdn.bootstrap-makeup.io/img/bootstrap-makeup_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Bootstrap Makeup Documentation',
      short_name: 'BootstrapMakeupDoc',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
