# Quiet Perspective — GitHub Pages site

This is the complete static website for https://quietperspectivehq.github.io/.

## Publish / replace the existing site

1. Extract this ZIP.
2. Copy **everything inside** the extracted folder into the root of the existing `quietperspectivehq.github.io` repository, replacing older versions.
3. Make sure hidden entries are included: `.nojekyll` and `.well-known/ard.json`. The visible root-level `ard.json` is also linked from the page as a fallback discovery location.
4. Commit and push to the `main` branch.
5. After GitHub Pages deploys, verify the files listed below.

The `index.html` file is at the ZIP root; do not upload an extra parent folder.

## Useful verification URLs

- Home: https://quietperspectivehq.github.io/
- Robots: https://quietperspectivehq.github.io/robots.txt
- Sitemap: https://quietperspectivehq.github.io/sitemap.xml
- LLM guide: https://quietperspectivehq.github.io/llms.txt
- ARD manifest: https://quietperspectivehq.github.io/ard.json
- Conventional ARD endpoint: https://quietperspectivehq.github.io/.well-known/ard.json

Both ARD documents deliberately contain an empty `entries` array. Quiet Perspective is a social-profile landing page and does not publish an agent, MCP server, API or autonomous tool. No agentic capabilities are claimed.

## Performance changes in this revision

- Removed the logo halo's animated `box-shadow`, which Lighthouse identified as a non-composited animation. Its static brand shadow is retained.
- Kept the page heading visible immediately; the card entrance effect uses transforms rather than an opacity fade.
- The brand mark and first social icon are prioritised; remaining below-the-fold social icons use lazy loading.
- Preserved the responsive layouts, existing social destinations, logo art, favicon directory and sharing metadata.

## GitHub Pages notes

GitHub Pages controls response caching headers. The standard short cache lifetime for static assets cannot be changed through this repository's HTML or CSS. The small external stylesheet request is retained to keep the site maintainable; its PageSpeed estimated saving was modest.
