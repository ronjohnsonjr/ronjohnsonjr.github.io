# Ronald Johnson, Jr. Portfolio

This repository powers [sennajin.github.io](https://ronjohnsonjr.github.io/) using the
[DevPortfolio](https://github.com/RyanFitzgerald/devportfolio) Astro template. The initial
commit brings the template into this repo so we can iterate on the content and styling to
match Sena's professional profile.

## Local development

```bash
npm install
npm run dev
```

The site configuration lives in [`src/config.ts`](src/config.ts). Update the exported object
to change personal information, sections, and accent colors. Removing items from the arrays
(e.g., projects, experience, education) will hide those sections automatically.

## Build for production

```bash
npm run build
```

The build command outputs static assets to `dist/`, which can be deployed to GitHub Pages or
any static hosting provider.
