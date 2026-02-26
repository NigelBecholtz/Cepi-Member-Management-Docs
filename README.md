# CEPI Member Management API — Documentation

Documentation for the CEPI Member Management API, built with [Zudoku](https://zudoku.dev).

**Powered by Zudoku**

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

The site deploys automatically via GitHub Actions when you push to `main`.

**Setup:**
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under "Build and deployment", set **Source** to **GitHub Actions**
4. Push to `main` — the workflow builds and deploys

The site will be available at `https://<username>.github.io/<repo-name>/` (e.g. `https://yourorg.github.io/Cepi-Docs/`).

> **Note:** For user/org sites (`username.github.io`), set `BASE_PATH` to empty in the workflow.

## Structure

- `pages/documentation/` — MDX documentation pages
- `openapi.json` — OpenAPI specification for the API
- `zudoku.config.ts` — Zudoku configuration
- `.github/workflows/deploy.yml` — GitHub Pages deployment
