/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        assistant: ['Assistant', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: '#d3c6be',
        'gradient-start': '#98a27d',
        'gradient-end': '#d3c6be',
        foreground: '#656d55',
        card: {
          DEFAULT: "#ffffff",
          foreground: "#656d55",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#656d55",
        },
        primary: {
          DEFAULT: '#656d55',
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: '#98a27d',
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: '#7f7e6a',
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#d3c6be",
          foreground: "#7f7e6a",
        },
        destructive: {
          DEFAULT: "#ff4444",
          foreground: "#ffffff",
        },
        border: "#a6a590",
        input: "#d3c6be",
        ring: "#656d55",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        'light-beige': '#d3c6be',
        'dark-green': '#656d55',
        'light-green-1': '#98a27d',
        'light-green-2': '#b1b199',
        'light-green-3': '#a6a590',
        'medium-green': '#7f7e6a',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slideDown": {
          '0%': { 
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        "floating": {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slideDown": "slideDown 0.5s ease-out forwards",
        "floating": "floating 3s ease-in-out infinite",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};