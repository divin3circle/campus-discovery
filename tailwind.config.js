/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: "#130e01",
        background: "#f9f1f0",
        primary: "#F79489",
        secondary: "#fadddb",
        accent: "#ff0080",
        menu: "#CEE3E9",
      },
      fontSize: {
        sm: "0.566rem",
        base: "0.8rem",
        xl: "1.131rem",
        "2xl": "1.599rem",
        "3xl": "2.261rem",
        "4xl": "3.197rem",
        "5xl": "4.521rem",
      },
      fontFamily: {
        heading: "Mukta Mahee",
        body: "Mukta Mahee",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
