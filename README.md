# Fenland Paws — demo dog-training website

A demo site for a (fictional) dog trainer in Wisbech, built with [Astro](https://astro.build) and deployed to
GitHub Pages. Content is edited through Sveltia CMS at `/admin/`.

**Live:** https://myerzzd.github.io/astro-test-site/

## Pages

- **Home** — hero, stats, filterable class finder, "which class?" quiz, review carousel, FAQs
- **Classes** — all classes with age/day filters; each has its own page
- **About**, **News**, **Book** (demo booking form — nothing is sent)

## Developing

```bash
npm install
npm run dev      # http://localhost:4321/astro-test-site/
npm run build    # output in dist/
```

Push to `main` and GitHub Actions rebuilds and deploys the site (about a minute).

Content lives in `src/content/` (classes, news posts, page text) and `src/data/site.json`
(business details, reviews, FAQs). Images referenced by a number are stock photos from placedog.net;
uploaded images go to `public/uploads/`.

## Editing content (Sveltia CMS)

The site has a browser-based editor at **https://myerzzd.github.io/astro-test-site/admin/**.

- **Site settings** — business name, phone, address, homepage headline, reviews, FAQs.
- **Classes** — add, edit or remove classes (price, day, spaces left, description, photo).
- **Pages** — the text on the Home and About pages.
- **News** — create, edit and delete posts.

Saving in the CMS commits directly to this repo; the site rebuilds and goes live in about a minute.

### Signing in

1. Open the admin link above and click **Sign In Using Access Token**.
2. Paste the access token you were given and click **Sign In**. You only need to do this once per browser.

The token is like a password — don't share it or post it anywhere. If it's lost or leaked, the site
owner can revoke it at GitHub → Settings → Developer settings → Fine-grained tokens and issue a new one
(scope: this repository only, Contents: read & write).
