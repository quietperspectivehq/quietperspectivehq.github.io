# Quiet Perspective — GitHub Pages

A complete, responsive social-links website for Quiet Perspective. It uses plain HTML, CSS and a tiny JavaScript enhancement; there is no build step, framework, or external icon service.

## Replace the existing website

1. Download and extract this ZIP file.
2. Open the extracted `quiet-perspective-final` folder.
3. Upload **everything inside that folder** to the root of your `quietperspectivehq.github.io` repository, replacing the old files and folders when prompted. Do not upload the enclosing folder itself.
4. Commit the changes to the `main` branch.
5. In GitHub, open **Settings → Pages** and confirm deployment from `main` and `/(root)`.
6. Open `https://quietperspectivehq.github.io/` after GitHub Pages finishes publishing.

The existing `images/favicon/` directory is preserved. All favicon references use that directory and correct MIME types. The root `favicon.ico` is also included as a compatibility fallback for browsers that request `/favicon.ico` automatically.

## Project structure

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
├── site.webmanifest
├── favicon.ico
└── images/
    ├── brand-mark.webp
    ├── brand-logo-full.webp
    ├── brand-banner.webp
    ├── og-image.jpg
    ├── favicon/
    │   ├── favicon.svg
    │   ├── favicon.ico
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── favicon-48x48.png
    │   ├── favicon-192x192.png
    │   ├── favicon-512x512.png
    │   ├── apple-touch-icon.png
    │   └── safari-pinned-tab.svg
    └── social/
        ├── discord.webp
        ├── telegram.webp
        ├── mastodon.webp
        ├── bluesky.webp
        ├── tumblr.webp
        ├── instagram.webp
        ├── youtube.webp
        └── pixelfed.webp
```

## Responsive layout

- Wide desktop: three social-link columns in a centered card with a 1000px maximum width.
- Tablets and medium screens: two columns through 1000px.
- Phones: one column at 620px and below, with extra-tight spacing below 360px.
- The page adapts to short landscape screens and respects reduced-motion preferences.
- Keyboard users get a skip link and visible focus indicators.

## Performance and sharing

- The main logo and social icons are optimized WebP assets.
- The dedicated Open Graph/X sharing image is `images/og-image.jpg` (1200 × 630).
- The favicon set uses a circular mark with transparent corners for browser icons. The Apple touch icon uses the standard square canvas with the circular badge centered inside it.
- No third-party CSS, JavaScript, fonts, or icon services are required.

## Updating social destinations

Edit the nine `href` values in the `<nav id="social-links">` section of `index.html`. The labels and short descriptions are next to each destination.

## After deployment

Test at 320, 375, 430, 768, 1024, 1440, and 1920px widths. Browsers cache favicons separately from normal page assets; after publishing, test in a private window or clear the browser's favicon/site cache if the old icon remains visible. Social platforms may cache share previews, so their sharing debugger may need to re-fetch the page URL.
