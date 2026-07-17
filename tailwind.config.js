/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./tests/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#171717",
          900: "#1c1c1c",
          850: "#202020",
          800: "#262626",
          700: "#353233",
        },
        flame: {
          400: "#ff6589",
          500: "#ff2f5f",
          600: "#ff0432",
        },
      },
      boxShadow: {
        glow: "0 24px 80px rgba(255, 4, 50, 0.18)",
        card: "0 16px 50px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        "cta-gradient": "linear-gradient(135deg, #ff6589 0%, #ff0432 100%)",
      },
    },
  },
  plugins: [],
};
