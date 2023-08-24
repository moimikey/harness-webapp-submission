import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "rgba(var(--color-primary))",
        secondary: "rgba(var(--color-secondary))",
        tertiary: "rgba(var(--color-tertiary))",
        accent: "rgba(var(--color-accent))",
      },
    },
  },
  plugins: [],
};

export default config;
