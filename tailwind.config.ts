import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#E0E5EC",
        fg: "#3D4852",
        muted: "#6B7280",
        accent: "#6C63FF",
        "accent-light": "#8B84FF",
        "accent-secondary": "#38B2AC",
        placeholder: "#A0AEC0",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      boxShadow: {
        ext: "9px 9px 16px rgba(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)",
        "ext-hover":
          "12px 12px 20px rgba(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6)",
        "ext-sm":
          "5px 5px 10px rgba(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)",
        inset:
          "inset 6px 6px 10px rgba(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)",
        "inset-deep":
          "inset 10px 10px 20px rgba(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)",
        "inset-sm":
          "inset 3px 3px 6px rgba(163,177,198,0.6), inset -3px -3px 6px rgba(255,255,255,0.5)",
      },
      borderRadius: {
        card: "32px",
        btn: "16px",
        well: "24px",
        pill: "9999px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 0.4s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
