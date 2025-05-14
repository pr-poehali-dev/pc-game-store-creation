import { type Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        game: {
          purple: "#9b87f5",
          dark: "#1A1F2C",
          gray: "#403E43",
          light: "#F1F0FB",
        },
        // ... остальные цвета ...
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
} as Config;
