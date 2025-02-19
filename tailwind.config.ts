import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        raisinBlack: "var(--raisin-black)",
        white: "var(--white)",
        icterine: "var(--icterine)",
        magnolia: "var(--magnolia)",
        slateBlue: "var(--medium-slate-blue)",
        paleAzure: "var(--pale-azure)",
        persianRose: "var(--persian-rose)",
      },
    },
  },
  plugins: [],
} satisfies Config;
