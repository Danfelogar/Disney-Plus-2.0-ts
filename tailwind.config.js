/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        google: {
          "button-blue": "#1a73e8",
          "button-blue-hover": "#5195ee",
          "logo-blue": "#4285f4",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
