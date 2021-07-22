const pluginSEO = require("eleventy-plugin-seo")
const inspect = require("util").inspect

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`)
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"))
  eleventyConfig.addPassthroughCopy('admin')
  eleventyConfig.addPassthroughCopy('robots.txt')
  eleventyConfig.addPassthroughCopy('favicon.ico')
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/fonts')
  eleventyConfig.addPassthroughCopy({'node_modules/alpinejs/dist/cdn.min.js': './js/alpine.js'})
  eleventyConfig.addPairedShortcode("columnGroup", (content) => {
    return `<div class="flex">\n\n${content}\n\n</div>`
  })
  eleventyConfig.addPairedShortcode("column", (content) => {
    return `<div>\n\n${content}\n\n</div>`
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
