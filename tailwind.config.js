/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Light-grey surfaces with charcoal type and a blue accent.
        // Text is charcoal (`ink`), never blue — blue is reserved for
        // interactive accents, fills and borders.
        // NOTE: do not name a color "base" — Tailwind already ships `text-base`
        // as a font-size utility, and a color of the same name generates a
        // second `.text-base` rule that silently overrides text color.
        canvas: "#eff0f2", // page background — light grey
        surface: "#e4e6ea", // footer / recessed areas
        card: "#1b2026", // dark card surface — inverted against the page
        line: "#d3d6db", // borders on LIGHT surfaces
        cardline: "#2f363f", // borders / dividers on DARK cards
        ink: {
          DEFAULT: "#14181e", // near-black — headings on canvas
          soft: "#383e47", // body copy on canvas
        },
        // Text that sits ON a dark card. Same light grey as the page for
        // headings, with two steps down for body and meta copy. The lower two
        // are kept well clear of the card colour — at small sizes anything
        // under ~8:1 here starts to blend into #1b2026.
        oncard: {
          DEFAULT: "#eff0f2", // headings on card (14.5:1)
          soft: "#dee3e8", // body copy on card (12.8:1)
          muted: "#b9c0c9", // meta copy on card (9.0:1)
        },
        brand: {
          DEFAULT: "#3a4149", // charcoal — accents, fills, borders (8.4:1)
          light: "#e9ebee", // pale grey tint — backgrounds only, never text
        },
        accent: "#14181e", // black — terminal prompt, cursor, gradient end
        // Darkened from #6a7280 so it also clears 4.5:1 against the footer's
        // `surface` tint, not just against `canvas`.
        muted: "#5e6672", // secondary text (5.1:1 canvas / 4.8:1 surface)
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        // Neutral elevation — no hue, so the palette stays monochrome.
        // (Names kept so existing shadow-glow / shadow-glow-cyan keep working.)
        glow: "0 10px 28px -12px rgba(20, 24, 30, 0.3)",
        "glow-cyan": "0 6px 18px -10px rgba(20, 24, 30, 0.22)",
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
