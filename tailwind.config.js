module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'login': "url('src/pages/login/img/login.jpg')"
      }),
      height: {
        '88': '23rem'
      },
      backgroundPosition: {
        'top-4': 'center top -4rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
