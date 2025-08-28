module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",      // cor de fundo padrão
        foreground: "#374151",      // cor do texto
        accent: "d97706",          // se você usa accent
        "accent-foreground": "#ffffff", 
        primary: "#164e63",
        "primary-foreground": "#ffffff",
        border: "#e5e7eb",          // se você usava border-border
        ring: "rgba(22, 78, 99, 0.5)" // se você usava outline-ring/50
      }
    }
  },
  plugins: [],
}