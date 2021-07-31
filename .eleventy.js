const pluginSEO = require("eleventy-plugin-seo")
const inspect = require("util").inspect
const pluginEmbedEverything = require("eleventy-plugin-embed-everything")
const pluginTailwindCSS = require("eleventy-plugin-tailwindcss")
const buildTime = String(Date.now()) // NOTE: This doesn't update for watch events. Pretty sure that's fine?

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`)
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"))
  eleventyConfig.addPlugin(pluginEmbedEverything)
  eleventyConfig.addPlugin(pluginTailwindCSS, {
    src: "./src/style.css",
    watchEleventyWatchTargets: true,
  })
  eleventyConfig.addPassthroughCopy('admin')
  eleventyConfig.addPassthroughCopy('robots.txt')
  eleventyConfig.addPassthroughCopy('favicon.ico')
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/fonts')
  eleventyConfig.addPassthroughCopy({'node_modules/alpinejs/dist/cdn.min.js': './js/alpine.js'})
  eleventyConfig.addPairedShortcode("columnGroup", (content) => {
    return `<div class="column-group">\n\n${content}\n\n</div>`
  })
  eleventyConfig.addPairedShortcode("column", (content) => {
    return `<div class="column">\n\n${content}\n\n</div>`
  })
  eleventyConfig.addShortcode("title", (content) => {
    return content.charAt(0).toUpperCase() + content.slice(1).replace(/_/g," ")
  })
  eleventyConfig.addPairedShortcode("div", (content, classes) => {
    return `<div class="${classes}">\n\n${content}\n\n</div>`
  })
  eleventyConfig.addShortcode('buildTime', function () {
    return buildTime
  })
  let markdownIt = require('markdown-it')
  let options = {
    breaks: true,
    code: false,
    html: true,
    linkify: true
  }
  let markdownLib = markdownIt(options)
  eleventyConfig.addShortcode("markdown", (content) => {
    return markdownLib.render(content)
  })
  eleventyConfig.setLibrary("md", markdownLib)
  eleventyConfig.setBrowserSyncConfig({
    open: true
  })
  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: "src",
      layouts: "_layouts",
      output: "_site"
    },
    passthroughFileCopy: true
  }
}
