/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#338573",
      },
      backgroundImage: {
        banner: "url('/assets/banner.png')",
      },
    },
  },
  plugins: [],
};
