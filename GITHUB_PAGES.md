# GitHub Pages Setup (Docsify)

This repository includes a Docsify site under `docs-site/`.

## Option A (Recommended): Serve from `/docs-site`
1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Select your branch (e.g., `main`) and set **Folder** to `/docs-site`.
5. Save.

Docsify will load automatically (no build step).

## Option B: Move docsify to `/docs`
If you prefer GitHub Pages to serve from `/docs`, move the contents of `docs-site/` into a `docs/` folder
and point Pages at `/docs`.
