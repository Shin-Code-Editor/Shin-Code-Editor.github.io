const path = require("path");
const fs = require("fs");

module.exports = {
  title: "Wecde",
  description: "Documentation for Wecde",
  themeConfig: {
    repo: "wecde/wecde.github.io",
    docsDir: "/",

    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",

    algolia: {
      apiKey: "1bb8a5ef0278bf65741f8ca44a8d0438",
      indexName: "wecde.doc",
    },

    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Live App",
        link: "https://wecde.github.io/wecde",
      }, 
      {
        text: "Download",
        link: "https://github.com/wecde/wecde/releases",
      },
      {
        text: "Release Notes",
        link: "https://github.com/wecde/wecde/releases",
      },
    ],

    sidebar: {
      "/": [
        { text: "Welcome", link: "/" },
        { text: "Getting started", link: "/getting-started" },
        { text: "Create app token", link: "/create-app-token" },
        { text: "Editor Settings", link: "/editor-settings" },
        { text: "Git guide", link: "/git-guide" },
        { text: "Importing exporting", link: "/importing-exporting" },
      ],
    },
  },
};
