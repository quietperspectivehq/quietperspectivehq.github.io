# Quiet Perspective favicon pack

These favicon assets were created from the exact `images/brand-mark.png` artwork in the Quiet Perspective GitHub Pages repository.

## Files

- `favicon.ico` — multi-size browser icon (16, 32, 48 px)
- `favicon.svg` — scalable SVG favicon; uses `/favicon-512x512.png` as its artwork source
- `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png` — PNG fallbacks
- `apple-touch-icon.png` — iOS home-screen icon (180 × 180)
- `favicon-192x192.png`, `favicon-512x512.png` — larger device/app icon sizes
- `site.webmanifest` — theme and icon metadata
- `index-head-snippet.html` — the HTML links to add to the `<head>` of `index.html`

## Install on GitHub Pages

1. Extract this ZIP.
2. Upload all icon files and `site.webmanifest` to the **repository root**, next to `index.html` (do not put them in `images/`).
3. Open `index.html` and replace the old favicon line with the contents of `index-head-snippet.html`.
4. Commit the changes to `main`.
5. After GitHub Pages redeploys, open the site in a private/incognito window or hard-refresh it. Favicons are often cached by browsers.

All links use root-relative paths because this is an account-level GitHub Pages site at `quietperspectivehq.github.io`.
