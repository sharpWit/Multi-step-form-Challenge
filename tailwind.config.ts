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
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          marineBlue: "hsl(213, 96%, 18%)",
          purplishBlue: "hsl(243, 100%, 62%)",
          pastelBlue: "hsl(228, 100%, 84%)",
          lightBlue: "hsl(206, 94%, 87%)",
          strawberryRed: "hsl(354, 84%, 57%)",
        },
        neutral: {
          coolGray: "hsl(231, 11%, 63%)",
          lightGray: "hsl(229, 24%, 87%)",
          magnolia: "hsl(217, 100%, 97%)",
          alabaster: "hsl(231, 100%, 99%)",
          milk: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
