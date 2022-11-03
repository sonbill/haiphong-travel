/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    // colors: {
    //   borderColor: '#bdbdbd',
    //   placeholderColor: '#bbb',
    //   textColor: '#71717a'
    // }
  },
  plugins: [
    '@tailwindcss/forms',
  ],
}