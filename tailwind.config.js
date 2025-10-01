const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        brand: {
          blue: "#2563eb",   // Tailwind blue-600
          red: "#dc2626",    // Tailwind red-600
          green: "#16a34a",  // Tailwind green-600
          yellow: "#ca8a04", // Tailwind yellow-600
          gray: "#4b5563",   // Tailwind gray-600
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#2563eb",
            secondary: "#4b5563",
            success: "#16a34a",
            warning: "#ca8a04",
            danger: "#dc2626",
          },
        },
        dark: {
          colors: {
            primary: "#2563eb",
            secondary: "#4b5563",
            success: "#16a34a",
            warning: "#ca8a04",
            danger: "#dc2626",
          },
        },
      },
    }),
    require('@tailwindcss/typography'),
  ],
};

module.exports = config;
