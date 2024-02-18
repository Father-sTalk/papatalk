/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxl: "1728px",
        xl: "1440px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "320px",
      },
      boxShadow: {
        "papa-sm": "0px 10px 16px 0px rgba(0, 0, 0, 0.04)",
        "papa-input": "-5px 5px 20px 0px rgba(0, 0, 0, 0.05)",
      },
      width: {
        smallBox: "var(--w-smallBox)",
        middleBox: "var(--w-middleBox)",
        largeBox: "var(--w-largeBox)",
      },
      height: {
        header: "var(--h-header)",
        footer: "var(--h-footer)",
        smallBox: "var(--h-smallBox)",
        middleBox: "var(--h-middleBox)",
        largeBox: "var(--h-largeBox)",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.6rem",
        lg: "1rem",
      },
      padding: {
        sm: "0.8rem",
        md: "1.6rem",
        lg: "2.4rem",
      },
      gap: {
        sm: "0.8rem",
        md: "1.6rem",
        lg: "2.4rem",
        xl: "3.2rem",
        xxl: "4rem",
      },
    },
  },
  plugins: [nextui()],
};
