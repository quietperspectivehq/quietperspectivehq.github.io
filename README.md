# Quiet Perspective — GitHub Pages

A responsive, single-page social profile for Quiet Perspective. Built with plain HTML, CSS and a tiny JavaScript enhancement; no build step or external UI framework is required.

## Publish

1. Download and extract this project.
2. Upload **the contents of this folder** to the root of `quietperspectivehq.github.io` (do not upload an extra enclosing folder).
3. Commit to the `main` branch.
4. In GitHub, open **Settings → Pages** and confirm the site is deployed from `main` / `/(root)`.
5. Open `https://quietperspectivehq.github.io/` after GitHub Pages finishes deploying.

## Files

```text
.
├── index.html
├── styles.css
├── script.js
├── site.webmanifest
├── favicon.ico                 # Root fallback for browsers that request it directly
└── images/
    ├── brand-mark.webp         # Optimized header logo
    ├── brand-logo-full.webp    # Optional full logo asset
    ├── brand-banner.webp       # Original brand banner
    ├── og-image.jpg            # 1200 × 630 social preview image
    ├── favicon/
    │   ├── favicon.ico
    │   ├── favicon.svg
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── favicon-48x48.png
    │   ├── favicon-192x192.png
    │   ├── favicon-512x512.png
    │   └── apple-touch-icon.png
    └── social/                 # Optimized WebP platform icons
```

## Responsive behaviour

- Wide desktop: three social-link columns.
- Tablets and medium screens: two columns through 1000px.
- Phones: one column at 620px and below.
- Narrow 320–360px screens receive tighter spacing and type adjustments.
- Reduced-motion preferences are respected.
- The page opens at the top; it has no visible skip-to-links banner or automatic jump to the social section. Legacy `#social-links` URLs are cleaned up on load.

## Branding and metadata

The page keeps the Quiet Perspective evergreen, ivory, sage and gold palette. Open Graph and X/Twitter metadata use `images/og-image.jpg`, a 1200 × 630 image derived from the supplied brand banner. Favicon links correctly point to `images/favicon/`; the web app manifest remains in the site root and points to the icons in that folder.

## Updating links

Edit the nine `href` values in the social navigation `<nav>` section of `index.html`. The visible names and details are in the same anchor elements.

## After deployment

- Test at 320, 375, 430, 768, 1024 and 1440px widths.
- Check favicon after a hard refresh or in a private/incognito window; browsers can cache favicons independently of the page.
- Social-preview bots can cache old metadata. Re-scrape the URL in the relevant platform's sharing debugger if an old image remains visible.
