import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "320px",
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          marineBlue: "hsl(var(--marine-blue))",
          purplishBlue: "hsl(var(--purplish-blue))",
          pastelBlue: "hsl(var(--pastel-blue))",
          lightBlue: "hsl(var(--light-blue))",
          strawberryRed: "hsl(var(--strawberry-red))",
        },
        neutral: {
          coolGray: "hsl(var(--cool-gray))",
          lightGray: "hsl(var(--light-gray))",
          magnolia: "hsl(var(--magnolia))",
          alabaster: "hsl(var(--alabaster))",
          milk: "hsl(var(--milk))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
