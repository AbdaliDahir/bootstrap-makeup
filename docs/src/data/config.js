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
    title:
      "<a href='https://bootstrap-makeup.io/learn/'> Bootstrap Makeup </a>",
    githubUrl: 'https://github.com/bootstrap-makeup/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: `<li>
      <a href="https://twitter.com/bootstrap-makeuphq" target="_blank" rel="noopener">
        <div class="twitterBtn">
          <img src='https://graphql-engine-cdn.bootstrap-makeup.io/learn-bootstrap-makeup/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
        </div>
      </a>
    </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: 'nuyt',

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
    title:
      "<a href='https://bootstrap-makeup.io/learn/'>Bootstrap Makeup</a>",
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
