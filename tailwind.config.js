module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}',
    './src/Layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        navbarLogo:
          "url('https://png.pngtree.com/background/20210710/original/pngtree-black-cool-matte-texture-banner-picture-image_1056281.jpg')",
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      'md-lg': '868px',
      'md-lgMax': { max: '868px' },
      vsMbMax: { max: '250px' },
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  plugins: [],
}
