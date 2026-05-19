# ink-and-echo-app

Public landing page for [Ink and Echo](https://github.com/rRexhepi/InkAndEcho) — the audiobook + ebook sync reader. Tabbed install instructions for iOS, macOS (Catalyst), Android, Windows, and Linux.

Lives at: **https://rrexhepi.github.io/ink-and-echo-app/**

## Stack

Plain HTML + CSS + a few lines of vanilla JS. No build step, no framework, no dependencies. Deploys directly from `main` via GitHub Pages.

## Layout

- `index.html` — markup, semantic tabs, content per platform
- `styles.css` — design tokens lifted from the Ink and Echo app theme (saddle accent, parchment canvas, serif type stack), with `prefers-color-scheme` dark mode
- `app.js` — tab switching, keyboard nav (arrow keys, Home/End), URL-hash deep linking, auto-select tab by user agent on first visit

## Updating download links

Each CTA has a `data-link="<key>"` attribute. To wire up a real download:

```html
<a class="cta" href="https://example.com/InkAndEcho-1.0.0.AppImage" data-link="linux-appimage">Download AppImage</a>
```

Keys in use:
- `testflight-ios` — TestFlight invite (shared between iOS and macOS tabs)
- `play-store` — Google Play listing
- `apk-direct` — direct .apk download
- `windows-installer` — Windows installer download
- `linux-appimage` — Linux AppImage download

## Local preview

Open `index.html` directly in a browser, or:

```bash
python3 -m http.server 8000
```
