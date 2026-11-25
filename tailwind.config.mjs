/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'lopes-vermelho': '#B80F1A',
        'lopes-vinho': '#850911',
        'lopes-grafite': '#2B2B2B',
        'lopes-aco': '#6E6E6E',
        'lopes-gelo': '#F6F6F7',
      },
    },
  },
  plugins: [],
};