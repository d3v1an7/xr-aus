const pluginSEO = require("eleventy-plugin-seo")
const inspect = require("util").inspect
const embedEverything = require("eleventy-plugin-embed-everything")

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false) // TODO: if i can work out a way to allow certain files to still kick off builds (hello manifest.json) we can remove this line and get rid of .eleventyignore
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`)
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"))
  eleventyConfig.addPlugin(embedEverything);
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
