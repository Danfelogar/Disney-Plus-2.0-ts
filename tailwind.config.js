/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        "alcanos-white": {
          90: "#F3F5F7",
        },
        "alcanos-red": {
          90: "#D62727",
          80: "#FF3B3B",
          70: "#ffcdd4",
        },
        "alcanos-blue": {
          100: "#04284B",
          90: "#163474",
          85: "#D9EAFF",
          80: "#0E5393",
          70: "#0F3D67",
          65: "rgba(14, 83, 147, 0.15)",
          60: "#C3D4E4",
          50: "#E1EAF2;",
        },
        "alcanos-gray": {
          90: "#828282",
          80: "#C4C4C4",
          70: "#E0E0E0",
          60: "#F1F1F1",
          50: "#F2F3F8",
        },
        "alcanos-black": {
          90: "#333333",
          80: "#5B5A5A",
          70: "rgba(255,255,255,0.10)",
          60: "#333333a3",
          50: "#2A302A",
        },
        "alcanos-green": {
          90: "#597B10",
          85: "#064237",
          80: "#198754",
          75: "#06C270",
          70: "#99C33F",
          60: "#D9E9B8",
          50: "#BBE9CC",
          40: "#C7EBD1",
        },
        "alcanos-orange": {
          90: "#F2CD22",
        },
        "alcanos-yellow": {
          90: "#F2CD22",
          80: "#FFE17C",
          70: "#FBF0BD",
        },
      },
      flex: {
        "1-auto": "1",
      },
      backgroundImage: {
        "alcanos-gradient":
          "linear-gradient(273deg, #064237 -39.96%, #0D3B68 63.71%)",
        "alcanos-gradient-2":
          "linear-gradient(180deg, rgba(51, 51, 51, 0.08) 0.12%, #011D36 96.65%)",
        "alcanos-gradient-2-hover":
          "linear-gradient(180deg, rgba(51, 51, 51, 0.08) 0.08%, #011D36 79.39%)",
        "alcanos-gradient-3":
          "linear-gradient(93deg, rgba(6, 66, 55, 0.18) 2.28%, rgba(0, 65, 142, 0.60) 109.48%)",
      },
      boxShadow: {
        "alcanos-shadow": "0px 0px 9px 0px rgba(0, 0, 0, 0.10)",
        "alcanos-shadow-hover": "0px 0px 10px 7px rgba(0, 0, 0, 0.17)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
