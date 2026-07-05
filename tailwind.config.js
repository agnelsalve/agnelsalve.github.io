/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Dark, sleek palette
        base: "#0a0a0f",
        surface: "#12121a",
        card: "#161622",
        line: "#26263a",
        brand: {
          DEFAULT: "#7c3aed", // violet
          light: "#a78bfa",
        },
        accent: "#22d3ee", // cyan
        muted: "#9ca3af",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124, 58, 237, 0.5)",
        "glow-cyan": "0 0 40px -10px rgba(34, 211, 238, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
