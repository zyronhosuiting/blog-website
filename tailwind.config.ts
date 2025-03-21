import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

// IMPORTANT: When adding custom styles, remember to also add them to src/lib/utils.ts classGroups

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
      },
      fontSize: {
        h0: [
          "3rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "0.05em",
            fontWeight: "700",
          },
        ],
        h1: [
          "2.5rem",
          {
            lineHeight: "3rem",
            letterSpacing: "0.05em",
            fontWeight: "700",
          },
        ],
        h2: [
          "2rem",
          {
            lineHeight: "2.375rem",
            letterSpacing: "0.05em",
            fontWeight: "700",
          },
        ],
        h3: [
          "1.75rem",
          {
            lineHeight: "2.125rem",
            letterSpacing: "0.04em",
            fontWeight: "600",
          },
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "0.03em",
            fontWeight: "600",
          },
        ],
        h5: [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.02em",
            fontWeight: "600",
          },
        ],
        h6: [
          "1.125rem",
          {
            lineHeight: "1.375rem",
            letterSpacing: "0.02em",
            fontWeight: "600",
          },
        ],
        "title-l": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.01em",
            fontWeight: "600",
          },
        ],
        "title-m": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.01em",
            fontWeight: "600",
          },
        ],
        "title-s": [
          "0.75rem",
          {
            lineHeight: "1.125rem",
            letterSpacing: "0.01em",
            fontWeight: "600",
          },
        ],
        "body-l": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "body-m": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "body-s": [
          "0.75rem",
          {
            lineHeight: "1.125rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "btn-l": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.1em",
            fontWeight: "500",
          },
        ],
        "btn-s": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.1em",
            fontWeight: "500",
          },
        ],
        "label-l": [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.02em",
            fontWeight: "500",
          },
        ],
        "label-s": [
          "0.625rem",
          {
            lineHeight: "0.875rem",
            letterSpacing: "0.02em",
            fontWeight: "500",
          },
        ],
        "caption-l": [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.02em",
            fontWeight: "300",
          },
        ],
        "caption-s": [
          "0.625rem",
          {
            lineHeight: "0.875rem",
            letterSpacing: "0.02em",
            fontWeight: "300",
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      textColor: {
        DEFAULT: "#fff",
      },
    },
    colors: {
      black: "#000",
      white: "#fff",
      "dark-orange": "#fd8c00",
      "golden-gate-bridge": "#e95000",
      keppel: "#2ea99d",
      success: "#00FD87",
      error: "#FD4800",
      jet: "#393939",
      "primary-link": "#357DFF",
      orange: {
        "50": "#fff4e6",
        "100": "#fedbb0",
        "200": "#feca8a",
        "300": "#feb254",
        "400": "#fda333",
        "500": "#fd8c00",
        "600": "#e67f00",
        "700": "#b46300",
        "800": "#8b4d00",
        "900": "#6a3b00",
      },
      red: {
        "50": "#fdeee6",
        "100": "#f8c9b0",
        "200": "#f5af8a",
        "300": "#f08a54",
        "400": "#ed7333",
        "500": "#e95000",
        "600": "#d44900",
        "700": "#a53900",
        "800": "#802c00",
        "900": "#622200",
      },
      green: {
        "50": "#eaf6f5",
        "100": "#bee4e1",
        "200": "#9fd7d2",
        "300": "#73c5bd",
        "400": "#58bab1",
        "500": "#2ea99d",
        "600": "#2a9a8f",
        "700": "#21786f",
        "800": "#195d56",
        "900": "#134742",
      },
      gray: {
        "50": "#ebebeb",
        "100": "#c2c2c2",
        "200": "#a4a4a4",
        "300": "#7a7a7a",
        "400": "#616161",
        "500": "#393939",
        "600": "#343434",
        "700": "#282828",
        "800": "#1f1f1f",
        "900": "#181818",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
