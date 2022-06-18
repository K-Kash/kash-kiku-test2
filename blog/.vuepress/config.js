module.exports = {
  dest: "public",
  //hostname: "http://localhost",
  id: "post",
  dirname: "_posts",
  path: "/",
  title: "Kiku-Kash",
  theme: "blog-vuetify",

  plugins: ["@vuepress/back-to-top", "@vuepress/plugin-active-header-links"],

  themeConfig: {
    sidebar: {
      directoryIds: ["post"],
      profile: {
        avatarUrl: "https://k-kash.s3.us-west-1.amazonaws.com/logo.png",
        name: "Kiku-Kash",
        subTitle: "システムエンジニア",
        //descriptionHtml: "aaaaa",
      },
      hotTags: 10,
      recentPosts: 5,
      /*additionalBlocks: [
        {
          title: "Links",
          links: [
            { label: "About", path: "/about" },
            { label: "External Page", url: "https://example.com" },
          ],
        },
      ], */
    },
    footer: {
      links: [
        //{ label: "About", path: "/about" },
        //{ label: "External Page", url: "https://example.com" },
      ],
    },
    sns: {
      //twitter: "bbb",
      github: "ccc",
      instagram: "aaa",
      feed: "",
    },
    feed: {
      rss: false,
      atom: false,
      json: false,
    },
  },
};