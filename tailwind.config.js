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
        "custom-gray": "rgba(249, 249, 249, 0.1)",
        "custom-gray-hover": "rgba(249, 249, 249, 0.8)",
      },
      boxShadow: {
        custom:
          "0px 40px 58px -16px rgba(0, 0, 0, 0.8), 0px 30px 22px -10px rgba(0, 0, 0, 0.72)",
        custom2:
          "rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px",
        "custom-shadow":
          "rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px",
        "custom-shadow-hover":
          "rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px",
      },
      borderColor: {
        custom: "rgba(249, 249, 249, 0.8)",
      },
      transitionProperty: {
        all: "all",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
