module.exports = {
  title: 'Kash-Kiku',
  description: 'VuePress Blog demonstration',
  theme: '@vuepress/theme-blog',
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    logo: ['/assets/img/logo.png'],
    nav: [
      { text: 'Blog', link: '/' },
      { text: 'Tags', link: '/tag/' },
    ],
    footer: {
      copyright: [
        {
          text: 'Privacy Policy',
          link: '',
        },
        {
          text: 'Contact',
          link: '',
        },
      ],
    },
  }
}