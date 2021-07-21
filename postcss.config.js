module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    'cssnano': {
      preset: 'default',
    },
    'postcss-hash': {
      manifest: './src/_data/manifest.json',
    },
  }
}
