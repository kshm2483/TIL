const sidebar = require("./utils/sidebar");

module.exports = {
  title: "kshm2483",
  description: "Hello VuePress",
  email: "kshm2483@gmail.com",
  url: "https://kshm2483.github.io/",
  themeConfig: {
    repo: "kshm2483/TIL",
    repoLabel: "Github",

    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      sidebar.getSidebarGroup("vuejs", "Vue.js"),
      sidebar.getSidebarGroup("android", "Android")
    ],
    smoothScroll: true,
    lastUpdated: "Last Updated"
  },
  // plugins
  plugins: ["@vuepress/last-updated"]
};
