/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Neutrals
        ink:"#0e141b",
        coal:"#0a0e12",
        stone:"#eef2f5",
        snow:"#f8fafb",
        // Accents inspired by Tatras
        pine:"#2e7d6b",        // brighter green
        glacier:"#6dd3f5",     // sunnier blue
        dawn:"#ffd78a",        // warm sunrise
        moss:    "#7aa88f", // soft secondary
        sand:    "#d8c7b5", // warm neutral accent
        meadow:"#7bd389",      // fresh secondary
      },
      fontFamily: { sans: ["Inter","ui-sans-serif","system-ui"] },
      boxShadow: {
        card: "0 8px 24px rgba(3,10,18,.06)",
      },
    },
  },
  plugins: [],
};