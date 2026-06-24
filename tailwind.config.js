/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        // 主色调
        vermilion: {
          DEFAULT: "#8B1A1A",
          light: "#A52A2A",
          dark: "#6B1010",
          deep: "#4A0808",
        },
        paper: {
          DEFAULT: "#F4ECD8",
          light: "#FAF4E6",
          dark: "#E8DCC0",
          aged: "#D9CBA8",
        },
        ink: {
          DEFAULT: "#1A1612",
          light: "#3D362E",
          soft: "#5C5246",
        },
        gold: {
          DEFAULT: "#C9A961",
          light: "#E0C68A",
          dark: "#A8893E",
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', "serif"],
        sans: ['"Noto Sans SC"', "sans-serif"],
        display: ['"Cormorant Garamond"', '"Noto Serif SC"', "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        "8xl": "6rem",
        "9xl": "7.5rem",
        "10xl": "9rem",
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.5em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-down": "fadeDown 0.8s ease-out forwards",
        "slide-in": "slideIn 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "draw-line": "drawLine 1.2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        drawLine: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      backgroundImage: {
        "paper-texture":
          "radial-gradient(circle at 20% 30%, rgba(139,26,26,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(201,169,97,0.04) 0%, transparent 50%), repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(26,22,18,0.008) 2px, rgba(26,22,18,0.008) 4px)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
