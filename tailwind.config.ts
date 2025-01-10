import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: '0rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '100%',
      }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-brown': '#d4a373',
        'custom-beige': '#e7c8a0',
        'custom-white': '#fefae0',
        'custom-green': '#e9edc9',
        'custom-green-2': '#B5C38A',
        'custom-green-3': '#9EB065',
        'custom-gray':'#f2efe4'
      },
      // Vous pouvez aussi ajouter des dégradés si nécessaire
      gradientColorStops: {
        'custom-brown': '#d4a276'
      }
    },
  },
  plugins: [],
} satisfies Config;