import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        surface: "#0d0d0d",
        "surface-2": "#111111",
        "surface-3": "#1a1a1a",
        accent: "#00d4ff",
        "accent-dim": "#00a3c4",
        border: "#1a1a1a",
        "border-light": "#2a2a2a",
        muted: "#888888",
        dim: "#444444",
      },
      boxShadow: {
        accent: "0 0 40px rgba(0, 212, 255, 0.08)",
        "accent-md": "0 0 60px rgba(0, 212, 255, 0.15)",
      },
    },
  },
};

export default config;
