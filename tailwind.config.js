/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#0a0b10",
          card: "#12141f",
          border: "#1e2238",
          primary: "#6366f1",
          accent: "#06b6d4",
          neon: "#3b82f6"
        }
      }
    },
  },
  plugins: [],
}
