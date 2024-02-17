/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-epilogue)", "sans-serif"],
      },
      colors: {
        primary: "#2B2B2B",
        secondary: "#1C1A19",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
