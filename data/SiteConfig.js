const config = {
  siteTitle: 'Xenarte', // Site title.
  siteTitleShort: 'Xenarte', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Xenarte', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://xenarte.com', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription:
    'Xenarte myy käsintehtyjä laadukkaita korvakoruja, avaimenperiä, kortteja ja maalauksia. Kaikki tuotteet suunnittelee ja tekee nuori taiteilija ja yrittäjä, vasta 13-vuotias, Seena Arovaara. Seena hoitaa myös myymisen pääasiassa itse.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '--', // FB Application ID for using app insights
  googleAnalyticsID: '--', // GA tracking ID.
  disqusShortname: '-no-name-', // Disqus shortname.
  postDefaultCategoryID: 'Art', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD.MM.YYYY', // Date format for display.
  userName: 'Xenarte | Seena Arovaara', // Username to display in the author segment.
  userEmail: 'xenarteshop@gmail.com', // Email used for RSS feed's author segment
  userFacebook: '@xenarte',
  userInstagram: '@xenarte',
  userTwitter: '--', // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: '--', // Optionally renders "Follow Me" in the Bio segment.
  userLocation: 'Finland, Earth', // User location to display in the author segment.
  userAvatar: '/images/seena.png', // User avatar to display in the author segment.
  userAvatarTiny: '/smallimages/seena-small.png',
  userDescription:
    'Xenarte myy käsintehtyjä laadukkaita korvakoruja, avaimenperiä, kortteja ja maalauksia. Kaikki tuotteet suunnittelee ja tekee nuori taiteilija ja yrittäjä, vasta 13-vuotias, Seena Arovaara. Seena hoitaa myös myymisen pääasiassa itse.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'Etsy -verkkokauppa',
      url: 'https://etsy.com/shop/Xenarte',
      iconClassName: 'fab fa-etsy',
    },
    {
      label: 'Instagram',
      url: 'https://instagr.am/xenarte',
      iconClassName: 'fab fa-instagram',
    },
    {
      label: 'Facebook',
      url: 'https://fb.me/Xenarte',
      iconClassName: 'fab fa-facebook',
    },
    {
      label: 'Youtube',
      url: 'https://www.youtube.com/channel/UCc7YNVJ7ffi0O-QquPIrUcA',
      iconClassName: 'fab fa-youtube',
    },
    {
      label: 'Email',
      url: 'mailto:xenarteshop@gmail.com',
      iconClassName: 'fas fa-envelope',
    },
  ],
  copyright: 'Copyright © 2019. Xenarte', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
