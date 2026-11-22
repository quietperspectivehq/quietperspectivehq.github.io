# Quiet Perspective — GitHub Pages

Complete static website package for https://quietperspectivehq.github.io/.

## Deploy / replace the current repository

1. Extract this ZIP file.
2. Upload **all files and folders inside the extracted package** to the root of `quietperspectivehq/quietperspectivehq.github.io`.
3. Replace files when GitHub asks, and commit the changes to `main`.
4. Keep the `.nojekyll` file and the `.well-known/` directory. They are required for the hidden ARD manifest directory to be published by GitHub Pages.
5. Wait for GitHub Pages deployment, then test the URLs listed below.

The archive places `index.html` directly at its root (there is no enclosing project directory).

## Project files

- `index.html`, `styles.css`, `script.js`: responsive landing page.
- `images/brand-mark.webp`, `images/brand-logo-full.webp`, `images/brand-banner.webp`: optimized brand artwork.
- `images/social/*.webp`: optimized local platform icons.
- `images/favicon/*`: circular favicon set, retaining the requested directory structure.
- `images/og-image.jpg`: 1200 × 630 social-sharing preview.
- `robots.txt`: allows public crawling and points to the XML sitemap.
- `sitemap.xml`: one-page sitemap for the canonical homepage.
- `llms.txt`: concise Markdown overview and verified profile links for automated readers.
- `.well-known/ard.json`: structurally valid empty ARD manifest. The website does not currently publish MCP servers, A2A agents, or other callable agentic resources, so no fake entries are advertised.
- `.nojekyll`: tells GitHub Pages to publish static dot-directories, including `.well-known/`.

## After deployment, verify these URLs

- https://quietperspectivehq.github.io/robots.txt
- https://quietperspectivehq.github.io/sitemap.xml
- https://quietperspectivehq.github.io/llms.txt
- https://quietperspectivehq.github.io/.well-known/ard.json
- https://quietperspectivehq.github.io/images/favicon/favicon.svg

Each should return HTTP 200. The ARD manifest should contain an `entries` array (currently empty by design).

## Performance changes

- The main brand mark is resized to 288 × 288 WebP, appropriate for its 132 CSS-pixel display area and high-density screens.
- The first Discord icon is eager-loaded and high priority because Lighthouse identified it as an LCP candidate; subsequent social icons remain lazy-loaded.
- The profile-card entrance animation uses transform only. It no longer sets the whole card's opacity to zero, so the heading remains visible to audits and assistive technology immediately.
- Cache-busting query strings are added to the CSS and JavaScript references.

## Responsive layout

- Wide desktop: three columns.
- Tablet and medium screens: two columns.
- Mobile: one column, with tighter spacing below 360px.
- Keyboard focus remains visible on social links. No visible skip-to-links banner is included.
- Reduced-motion preferences are respected.

## Social destinations

The nine destinations currently included are Discord, Telegram, Mastodon, Bluesky, Tumblr, Instagram, YouTube, Pxlmo and Pixelfed.social. Edit their `href` attributes in the `<nav>` block of `index.html` to change destinations.
