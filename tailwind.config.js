/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "540px",
      sm: "640px",
      md: "972px",
      lg: "1200px",
      xl: "1380px",
      xxl: "1536px",
    },
    colors: {
      "dh-blue": "#2176FF",
      "dh-black": "#000014",
      "dh-red": "#fc2366",
      "dh-purple": "#ce8fdd",
      "dh-dgray": "#f38290",
      "dh-lgray": "#d0d0d4",
      "dh-yellow": "#f9e55b",
      "dh-green": "#00d2b3",
    },
    extend: {},
  },
  plugins: [],
};
