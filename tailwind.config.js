/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryPurple: "#571FCD",
        Gray: "#98A2B3",
        "Gray-800": "#475467",
      },
      backgroundColor: {
        PrimaryPurple: "#571FCD",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
