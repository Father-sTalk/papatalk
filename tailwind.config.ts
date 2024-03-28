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
      minHeight: {
        header: "var(--h-header)",
        footer: "var(--h-footer)",
        smallBox: "var(--h-smallBox)",
        middleBox: "var(--h-middleBox)",
        largeBox: "var(--h-largeBox)",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      padding: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
      },
      gap: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1.5rem",
        xl: "2rem",
        xxl: "2.5rem",
      },
      colors: {
        layout_background: "var(--layout-background)",
        layout_divider: "var(--layout-divider)",
        layout_black: "var(--layout-black)",
        layout_white: "var(--layout-white)",
      },
      gridTemplateColumns: {
        list: "665fr 222fr 115fr 115fr 115fr",
      },
      zIndex: {
        dropdown: 100,
        backdrop: 150,
        modal: 200,
        toast: 250,
      },
    },
  },
  plugins: [nextui()],
};
