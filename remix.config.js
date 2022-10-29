const { getDependenciesToBundle } = require("@remix-run/dev");


// console.log(getDependenciesToBundle('mdx-bundler'))
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    "bail",
    "fault",
    "zwitch",
    "trough",
    "unified",
    "periscopic",
    "mdx-bundler",
    "parse-entities",
    "longest-streak",
    "stringify-entities",
    "property-information",
    "space-separated-tokens",
    "comma-separated-tokens",
    "decode-named-character-reference",
    "@fal-works/esbuild-plugin-global-externals",
    "/^is.*/",
    "/^hast.*/",
    "/^unist-*/",
    "^/vfile.*/",
    "/^mdast.*/",
    "/^estree.*/",
    "/^remark.*/",
    "/^@mdx-js.*/",
    "/^character.*/",
    "/^micromark.*/",
  ]
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
