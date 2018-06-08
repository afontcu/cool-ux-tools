module.exports = {
  modules: [
    ['nuxt-sass-resources-loader', [
      '@/assets/autoload.scss',
    ]],
    ['@nuxtjs/google-analytics', {
      id: 'UA-120531729-1',
    }],
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cool UX Tools',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A curated list of (obviously) cool resources and tools for developers, UX researchers, designers and project managers.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Luckiest+Guy' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#4ba630' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  /*
  ** Generate configuration
  */
  generate: {
    fallback: true,
    routes: [
      '/user-recruiting',
      '/user-recording-heatmap',
      '/onsite-surveys',
      '/surveys',
      '/user-journey',
      '/user-personas',
      '/card-sorting',
      '/mindmapping-brainstorming',
      '/wireframing',
      '/mocking-prototyping',
      '/high-fidelity-prototyping',
      '/design-feedback',
      '/live-chat',
      '/presentations',
      '/story-mapping',
      '/design-guide-patterns',
      '/media-graphic',
      '/typography',
      '/screen-grabbing',
      '/landing-page',
      '/ab-split-testing',
      '/web-mobile-analytics',
      '/web-performance-optimization',
      '/accessibility',
      '/ux-suite',
      '/notetaking',
      '/project-management',
    ],
  },
}
