# ink-and-echo-app

Public landing page for [Ink and Echo](https://github.com/rRexhepi/InkAndEcho) — the audiobook + ebook sync reader. Tabbed install instructions for iOS, macOS (Catalyst), Android, Windows, and Linux.

Lives at: **https://rrexhepi.github.io/ink-and-echo-app/**

## Stack

Plain HTML + CSS + a few lines of vanilla JS. No build step, no framework, no dependencies. Deploys directly from `main` via GitHub Pages.

## Layout

- `index.html` — markup, semantic tabs, content per platform
- `styles.css` — design tokens lifted from the Ink and Echo app theme (saddle accent, parchment canvas, serif type stack). Dark theme only.
- `app.js` — tab switching, keyboard nav (arrow keys, Home/End), URL-hash deep linking, auto-select tab by user agent on first visit

## Updating download links

Each download link carries a `data-link="<key>"` attribute. The markup pattern:

```html
<a class="link" href="https://github.com/rRexhepi/ink-and-echo-app/releases/download/v0.2.0/ink-and-echo_0.2.0_amd64.deb" data-link="linux-deb-lite">Download ink-and-echo_0.2.0_amd64.deb</a>
```

Keys in use:
- `testflight-ios` — TestFlight invite (shared between iOS and macOS tabs)
- `android-arm64`, `android-armv7`, `android-x86_64` — direct .apk downloads
- `windows-installer` — Windows installer download
- `linux-deb-lite`, `linux-deb-full` — Linux .deb downloads

## Local preview

Open `index.html` directly in a browser, or:

```bash
python3 -m http.server 8000
```
