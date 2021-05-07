module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'construct': ['Poppins, sans-serif']
    },
    extend: {backgroundImage: theme => ({ 'hero-pattern': "url('https://www.canyon-news.com/wp-content/uploads/2017/12/Capture-3.jpg')" })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
