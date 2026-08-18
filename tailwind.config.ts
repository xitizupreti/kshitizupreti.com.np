import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#09090b",
          800: "#18181b",
          700: "#27272a",
        },
        primary: {
          50: "#fff5f8",
          100: "#ffe8ef",
          200: "#ffd0df",
          300: "#feadc5",
          400: "#fb7da4",
          500: "#f4548a",
          600: "#e0316d",
          700: "#bd1f56",
          800: "#9c1d49",
          900: "#821d41",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
