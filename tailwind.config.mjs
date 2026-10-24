export default {
  content: ['./src/**/*.{astro,html,md,mdx,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B1F3A',
          DEFAULT: '#14325C',
          light: '#F7F9FC',
          accent: '#C9A24B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
