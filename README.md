# VitePress 2.0 Project

This is a documentation site built with VitePress 2.0.0-alpha.3.

## Getting Started

### Installation

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

### Build

Build the site for production:

```bash
pnpm build
```

### Preview

Preview the production build locally:

```bash
pnpm preview
```

## Testing

This project ships with custom integration checks for the local search experience.

### Search verification

```bash
pnpm test:search
```

> Runs `node tests/verify-search.js`. The script expects a local dev server at `http://localhost:5173` and a Chromium instance started with `--remote-debugging-port=9222`.

## Project Structure

- `.vitepress/` - VitePress configuration
- `public/` - Static assets
- `index.md` - Home page
- `*.md` - Documentation pages 