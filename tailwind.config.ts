import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2421",
        rice: "#f6f1e7",
        paper: "#fbf8f0",
        mist: "#d8ded8",
        pine: "#31533f",
        moss: "#6f826e",
        gold: "#b8945e"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Noto Serif SC", "Songti SC", "SimSun", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 80px rgba(31, 36, 33, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
