# Quiet Perspective — GitHub Pages

A responsive, single-page social hub for **Quiet Perspective**. It uses the warm ivory, evergreen/teal, and sunrise-gold palette from the supplied logo, plus your supplied social-platform logo artwork.

## Preview locally

Open `index.html` in a browser. The page uses relative asset paths and has no build step, framework, CDN, or external icon dependency.

## Publish with GitHub Pages

1. Create a GitHub repository (for example, `quiet-perspective`).
2. Upload the **contents** of this folder to the repository root. `index.html` must be at the root, not inside another nested folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Once GitHub Pages finishes publishing, open the URL shown in the Pages settings.

## Customize

- **Main emblem:** replace `images/brand-mark.png` with your preferred square logo image, keeping the same filename.
- **Full logo artwork:** `images/brand-logo-full.png` is included as an alternative logo lockup.
- **Banner:** `images/brand-banner.webp` is included as an optional supplied banner asset; it is not used by the current layout.
- **Social icons:** replace files in `images/social/`, keeping their filenames, to use different versions of the platform logos.
- **Text and links:** edit `index.html`. Each social card is a normal anchor link, so destinations are easy to update.
- **Colors:** edit the CSS variables at the top of `styles.css`.

## Links included

The nine destinations and their order match the visible links on your Linktree profile: Discord, Telegram, Mastodon.social, Bluesky, Tumblr, Instagram, YouTube, Pxlmo (Pixelfed), and Pixelfed.social (Pixelfed).

**Facebook note:** Facebook appears in the Linktree page's browser title/account metadata, but a Facebook destination was not present in the visible clickable link list I could inspect. I have not guessed a Facebook URL. Add it to `index.html` when you have the exact page link.
