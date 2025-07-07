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
        roboto: ["Roboto", "system-ui", "sans-serif"],
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
      fontSize: {
        topperFontSize: "clamp(0.8125rem, 1.6vw, 1rem)",
        headerFontSize: "clamp(1.9375rem, 3.9vw, 3.0625rem)",
      },
      padding: {
        sectionPadding: "clamp(3.75rem, 7.82vw, 6.25rem) 1rem",
      },
    },
  },
  plugins: [],
};
