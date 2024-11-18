/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "rgb(219,219,219)",
        customBlue: "#53bdeb",
        secondary_gray: "rgba(115,115,115,1)",
        secondary_blue: "#385185",
        heading_gray: "#737373",
        meduim_blue: "rgba(0,55,107,1)",
        dark_blue: "#0095f6",
        link_blue: "#00376b",
        secondary_black:"#262626"
      },
    },
  },
  plugins: [],
};
