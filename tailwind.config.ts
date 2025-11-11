import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff5eb",
          100: "#ffe6cc",
          200: "#ffd0a3",
          300: "#ffb26a",
          400: "#ff9033",
          500: "#ff770f",
          600: "#e25e05",
          700: "#b74708",
          800: "#8f390c",
          900: "#74300d"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 119, 15, 0.35)"
      },
      backgroundImage: {
        "radial-orange":
          "radial-gradient(circle at top, rgba(255,119,15,0.35), rgba(0,0,0,0) 55%)",
      }
    },
  },
  plugins: [],
};
export default config;
