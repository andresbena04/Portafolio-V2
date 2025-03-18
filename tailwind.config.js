/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
    content: ["./src/**/*.{astro,js,ts,jsx,tsx,html}"],
    darkMode: "class",
    theme: {
      extend: {},
    },
    plugins: [animations],
  };
  