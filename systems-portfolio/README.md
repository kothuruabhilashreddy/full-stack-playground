# Systems Portfolio

A **Vite + React** portfolio focused on **systems**, **distributed systems**, and related projects. Component-rich UI using **MUI**, **Radix** primitives, **Tailwind CSS** 4, charts (**Recharts**), and motion—packaged for static hosting.

**Live site:** [https://kothuruabhilashreddy.github.io/systems/](https://kothuruabhilashreddy.github.io/systems/)

## Stack

- React 18, Vite 6
- Tailwind CSS 4 (`@tailwindcss/vite`)
- MUI (`@mui/material`), Radix UI suite
- Lucide icons, Recharts, Framer Motion (`motion`), Sonner toasts
- **GitHub Actions** → GitHub Pages (see `.github/workflows/deploy.yml`)

## Local development

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) runs `npm ci`, `npm run build`, and publishes the `dist/` folder to **GitHub Pages** on pushes to `main`. Configure the repository **Pages** source to **GitHub Actions** if prompted.
