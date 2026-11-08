# tracks-website

Website for Tracks, the Tonelings music game.

A small, responsive static website. No package installation or build step is needed.
The playground image is an illustration of the concept, not an app screenshot.
English and German pages are available at `/en/` and `/de/`.
The entry page follows a saved language choice, then the browser's preferred supported
language, with English as the fallback. The complete pages and language links also
work without JavaScript. Language preference uses local storage when available;
blocked storage does not prevent navigation.

## Publish with GitHub Pages

The repository owner enables this once:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then **Save**.
4. Wait for GitHub's Pages deployment to finish.

Expected address: https://pink-paper.github.io/tracks-website/

Subsequent pushes to `main` publish updates automatically.

## Edit

- `index.html`: automatic language entry, with complete English fallback content.
- `en/index.html` and `de/index.html`: complete translated pages, captions and alt text.
- `language.js`: initial language selection and remembered preference.
- `styles.css`: colours, typography and responsive layout.
- `favicon.svg`: browser tab icon.
- `.nojekyll`: serves the static files without Jekyll processing.
- `assets/firsttrack3.jpg`: a still rendered by Tracks from Henry's unchanged
  `firsttrack3` arrangement, using the app's actual playback canvas. It is an
  offline app render, not a phone recording.
- `assets/android-export.jpg`: Henry's Android screenshot of the track export dialog.

Only these finished images are published. App source, APKs and video files are
not part of this website repository. There is no video embed.

Use relative asset paths so the site works under `/tracks-website/` and on a custom domain.

## Preview locally

Run `python3 -m http.server 8000` in this directory and open http://localhost:8000/.

## Public repository

All committed files and commit history are public. Keep passwords, API keys,
signing keys, private app files and personal information out of this repository.
Git author metadata, including the configured email address, is also public.

No analytics, external font services, third-party scripts or cookies are added by
this website's code. GitHub Pages processes hosting requests under GitHub's own policies.
