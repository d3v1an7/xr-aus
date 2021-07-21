module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.md',
      './src/**/*.njk',
      '.eleventy.js',
    ],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      font1: ['font 1', 'sans-serif'],
      font2: ['font 2', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'example': "url('/images/example.svg')",
      }),
      backgroundSize: {
        'custom-cover': '100% auto',
      },
      backgroundPosition: {
        'custom-cover': 'top right',
      },
      colors: {
        colourname: {
          '50':  '#faf9f5',
          '100': '#FFFAF0',
          '200': '#f4deaf',
          '300': '#d7b572',
          '400': '#ba8c47',
          '500': '#9d6c29',
          '600': '#81521b',
          '700': '#633e17',
          '800': '#442b13',
          '900': '#2d1b0d',
        }
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
