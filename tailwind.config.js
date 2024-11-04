/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3699FF",
        "primary-hover": "#187DE4",
        "primary-light": "#E1F0FF",
        secondary: "#E4E6EF",
        "secondary-hover": "#d7dae7",
        success: "#1BC5BD",
        "success-hover": "#0BB7AF",
        "success-light": "#C9F7F5",
        danger: "#F64E60",
        "danger-hover": "#EE2D41",
        "danger-light": "#FFE2E5",
        warning: "#FFA800",
        "warning-hover": "#EE9D01",
        "warning-light": "#FFF4DE",
        info: "#8950FC",
        "info-hover": "#7337EE",
        light: "#F3F6F9",
        "light-hover": "#E4E6EF",
        gray: {
          100: "#f9f9f9",
          200: "#F4F4F4",
          400: "#B5B5C3",
          500: "#A1A5B7",
          600: "#78829D",
          700: "#4B5675",
          800: "#252F4A",
        },
        muted: "#747474",
      },
      fontSize: {
        mini: ["0.65rem", "1rem"],
      },
      boxShadow: {
        "3xl": "0px 0px 50px 0px rgba(82, 63, 105, 0.15)",
        lg: "0px 0px 50px 0px rgba(82, 63, 105, 0.15)",
        sm: "0px 0px 20px 0px rgba(76, 87, 125, 0.02)",
      },
      keyframes: {
        flash: {
          "25%, 40%": { opacity: "0" },
          "50%": { opacity: "1" },
          "75%": { opacity: "0" },
        },
        heartBeat: {
          "0%": { transform: "scale(1);" },
          "14%": { transform: "scale(1.1);" },
          "28%": { transform: "scale(1);" },
          "42%": { transform: "scale(1.1);" },
          "70%": { transform: "scale(1);" },
        },
      },
      animation: {
        flash: "flash 2s infinite",
        heartBeat: "heartBeat 1s infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
