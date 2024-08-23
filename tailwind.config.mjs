/** @type {import('tailwindcss').Config} */

import client from "./src/data/client.json";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // Enables dark mode based on a class
  theme: {
    screens: {
      xs: "360px", // Mobile
      sm: "768px", // Tablet, 48em
      md: "1024px", // Small desktop, 64 rem
      lg: "1300px", // Large desktop, 81.25em
      xl: "2000px", // Full width
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      colors: {
        current: "currentColor",
        dark: client.branding.dark,
        medium: client.branding.medium,
        accent: client.branding.accent,
        primary: client.branding.primary,
        primaryLight: client.branding.primaryLight,
        secondary: client.branding.secondary,
        secondaryLight: client.branding.secondaryLight,
        headerColor: client.branding.headerColor,
        bodyTextColor: client.branding.bodyTextColor,
        bodyTextColorWhite: client.branding.bodyTextColorWhite,
      },
    },
  },
  plugins: [],
};
