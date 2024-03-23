

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'input': '0px 1px 0px 0px rgba(255,255,255,0.4) inset, 0px -1px 0px 0px rgba(255,255,255,0.4) inset',
        'dark': '0px 1px 0px 0px var(--zinc-800) inset, 0px -1px 0px 0px var(--zinc-800) inset',
      },
    },
  },
  plugins: [],
}

