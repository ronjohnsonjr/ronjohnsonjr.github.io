# Sena Najin Portfolio

This repository powers [sennajin.github.io](https://sennajin.github.io/) using the
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

## Credits

- Template created by [Ryan Fitzgerald](https://github.com/RyanFitzgerald)
- Licensed under the [MIT License](LICENSE.md)
