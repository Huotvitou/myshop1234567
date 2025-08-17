module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
    colors:{ bg:"#0a0f0d", panel:"#0e1412", line:"#1b2723", neon:"#00ff84", neon2:"#35f58c", text:"#e8f1ef", muted:"#8aa0a2" },
    boxShadow:{ neon:"0 0 30px rgba(0,255,132,.25)" }
  }},
  plugins: []
}