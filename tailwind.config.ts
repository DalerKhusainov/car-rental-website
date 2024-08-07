import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "#FF9483",
        200: "#FF4D30",
        300: "#E6452B",
      },
      gray: {
        100: "#F8F8F8",
        200: "#DFDFDF",
        300: "#C6C6C6",
        900: "#2D2D2D",
      },
      textBody: "#706F7B",
      textBlack: "#010103",
      buttonBlack: "#161616",
    },
    screens: {
      mobile: "540px",
      tablet: "960px",
      desktop: "1248px",
    },
    boxShadow: {
      buttonPrimary: "0px 10px 15px 0px rgba(255, 83, 48, 0.35)",
      buttonPrimaryHover: "0px 10px 15px 0px rgba(255, 83, 48, 0.5)",
      testimonials: "0px 20px 40px 0px rgba(0, 0, 0, 0.08)",
      cta: "0px 10px 40px 0px rgba(0, 0, 0, 0.1)",
      faq: "0px 10px 15px 0px rgba(0, 0, 0, 0.1)",
    },
    fontSize: {
      xs: ["16px", { lineHeight: "25.6px", letterSpacing: "-0.03em" }],
      sm: ["18px", { lineHeight: "32.4px", letterSpacing: "-0.03em" }],
      lg: ["22px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      xl: ["24px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      "2xl": ["30px", { lineHeight: "36px", letterSpacing: "-0.032em" }],
      "3xl": ["42px", { lineHeight: "50.8px", letterSpacing: "-0.032em" }],
      "4xl": ["52px", { lineHeight: "54.6px", letterSpacing: "-0.032em" }],
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
      rubik: "Rubik, sans-serif",
    },
    borderRadius: {
      sm: "4px",
      md: "8px",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
