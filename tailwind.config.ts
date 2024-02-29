import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    fontSize: {
      "heading-1": ["4.209rem", { lineHeight: "4.6299rem", letterSpacing: "-0.08418rem", fontWeight: "700" }],
      "heading-2": ["3.157rem", { lineHeight: "3.4727rem", letterSpacing: "-0.06314rem", fontWeight: "700"  }],
      "heading-3": ["2.369rem", { lineHeight: "2.6059rem", letterSpacing: "-0.04738rem", fontWeight: "700" }],
      "heading-4": ["1.777rem", { lineHeight: "1.9547rem", letterSpacing: "-0.03554rem", fontWeight: "700"}],
      "heading-5": ["1.333rem", { lineHeight: "1.4663rem", letterSpacing: "-0.026666rem", fontWeight: "700" }],
      "text-base": ["1rem", { lineHeight: "1.35rem", letterSpacing: "0.01rem", fontWeight: "400" }],
      "text-small": ["0.75rem", { lineHeight: "1.0125rem", letterSpacing: "0.0075rem", fontWeight: "400" }],
      "text-tiny": ["0.563rem", { lineHeight: "0.76005rem", letterSpacing: "0.00563rem", fontWeight: "400" }],
    },
    spacing: {
      "section-xl": "12rem",
      "section-l": "9rem",
      "section-m": "5rem",
      "section-s": "2.5rem",
      "element-l": "2rem",
      "element-m": "1rem",
      "element-s": "0.5rem",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      
      gray: {
        light: "#FFFFFE",
        base: "#70706F",
        dark: "#4A4A4A"
      },
      pink: {
        base: "#FDE1E1",
      }
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config