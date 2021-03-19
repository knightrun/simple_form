export default {
  srcDir: 'src/',
  mode: 'universal',
  target: 'server',
  router: {
    middleware: [],
  },
  head: {
    title: 'test', //process.env.npm_package_name
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  css: [
    '@/static/css/reset.css',
    '@/assets/styles/common.scss',
  ],
  plugins: [
    { src: '~/plugins/commonComponents', ssr: true },
    { src: '~/plugins/veeValidator', ssr: true },
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  axios: {},
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
  },
  styleResources: {
    sass: [
    ]
  },
}
