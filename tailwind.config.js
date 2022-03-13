module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    'src/styles/*.css',
  ],
  theme: {
    fontFamily: {
      sans: ['Segoe UI', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      primary: '#514CDD',
      tertiary: '#8B7A9F',
      'text-primary': '#190134',
      'text-secondary': '#685879',
      'text-tertiary': '#8B7A9F',
      white: '#fff',
    },
    extend: {},
  },
  plugins: [],
};
