module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'construct': ['Poppins, sans-serif']
    },
    extend: {backgroundImage: theme => ({ 'hero-pattern': "url('https://img1.wsimg.com/isteam/ip/6e52cc35-1234-4fad-8162-6aa30e890f62/Home%204%20-%20297981512%201000PX.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true')" })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
