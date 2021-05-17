module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'construct': ['Poppins, sans-serif']
    },
    extend: {backgroundImage: theme => ({ 'hero-pattern': "url('./images/HomewithPool.jpeg')" })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
