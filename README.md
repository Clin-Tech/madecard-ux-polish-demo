# Made Card UX Demo

Demo: OTP flow + micro-interactions + rewards calculator (React/Next/Tailwind).

## Quick start

```bash
npm i
npm run dev
```

Then open http://localhost:3000

## Theming

Set exact brand hex values in `app/globals.css` CSS variables:

```css
:root {
  --brand-bg: #0b1020; /* Replace with Made Card background */
  --brand-surface: #0f172a; /* Card surface */
  --brand-primary: #1e293b; /* Primary text/heading */
  --brand-accent: #fbbf24; /* Accent (replace with real accent) */
  --brand-text: #ffffff; /* Body text */
}
```

## Notes

- Calculator is illustrative only.
- Motion honors `prefers-reduced-motion` to protect accessibility and INP/LCP.
- OTP never logs codes. Add rate limiting and server verification on backend.

## What
Brand-matched micro-interactions + rewards explainer + optional OTP. No backend, no analytics.

## Why
Small, safe UX wins that don’t regress Core Web Vitals. A11y respected.

## How
`npm i && npm run dev` (local), Vercel deploy ready.

# madecard-ux-polish-demo

A UX demo for Made Card
