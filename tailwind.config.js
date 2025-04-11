/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [animations],
};
