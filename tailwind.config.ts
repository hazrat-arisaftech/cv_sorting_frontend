import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      backgroundColor: {
        primary: "rgba(0, 116, 217, 1)",
        secondary: "rgba(0, 96, 197, 1)",
        lightgreen: "rgba(0, 116, 217, 0.05)",
      },
      textColor: {
        primary: "rgba(0, 116, 217, 1)",
        secondary: "rgba(0, 96, 197, 1)",
      },
      fontFamily: {
        jost: ["Jost"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
