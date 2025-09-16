/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // TODO: Replace placeholders with exact Made Card brand tokens after inspecting their site in devtools.
        brand: {
          bg: "var(--brand-bg)",
          surface: "var(--brand-surface)",
          primary: "var(--brand-primary)",
          accent: "var(--brand-accent)",
          text: "var(--brand-text)"
        }
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 6px 24px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
};
