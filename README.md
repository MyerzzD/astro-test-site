# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Editing content (Sveltia CMS)

The site has a browser-based editor at **https://myerzzd.github.io/astro-test-site/admin/**.

- **Pages** — edit the text of the Home and About pages.
- **News** — create, edit and delete posts.

Saving in the CMS commits directly to this repo; the site rebuilds and goes live in about a minute.

### Signing in

The CMS talks to GitHub, so editors need access to this repo (add them as a collaborator).

- **Personal access token** (works now, no extra setup): on the login screen choose
  *Sign in with a personal access token*. Create one at GitHub → Settings → Developer settings →
  Personal access tokens (fine-grained), scoped to this repo with **Contents: read & write**.
- **Sign in with GitHub** (nicer for clients): deploy
  [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) as a Cloudflare Worker, register a
  GitHub OAuth app pointing at it, and set `base_url` in `public/admin/config.yml`.

Content lives in `src/content/`; uploaded images go to `public/uploads/`.
