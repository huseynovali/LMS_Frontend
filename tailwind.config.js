/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%": { transform: "rotate(0deg)" },
          "3%": { transform: "rotate(30deg)" },
          "6%": { transform: "rotate(-28deg)" },
          "9%": { transform: "rotate(10deg)" },
          "12%": { transform: "rotate(-10deg)" },
          "15%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        shake: "shake 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
