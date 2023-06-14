/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './<custom-folder>/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': '#53B175',
      },
      fontFamily: {
        'gilroy-bold': 'Gilroy-Bold',
        'gilroy-medium': 'Gilroy-Medium',
        gilroy: 'Gilroy-Regular',
        'gilroy-semibold': 'Gilroy-SemiBold',
      },
    },
  },
  plugins: [],
};
