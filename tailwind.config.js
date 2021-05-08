module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'construct': ['Poppins, sans-serif']
    },
    extend: {backgroundImage: theme => ({ 'hero-pattern': "url('https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2013/2/22/3/sh13_01-pool-EPP8739_4x3.jpg.rend.hgtvcom.1280.960.suffix/1400977320198.jpeg')" })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
