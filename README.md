# Agnel Salve — Portfolio

Personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**, deployed to **GitHub Pages** via **GitHub Actions**.

🔗 Live: https://agnelsalve.github.io

## Tech stack

| Layer      | Tool                     |
| ---------- | ------------------------ |
| Build      | Vite 6                   |
| UI         | React 18                 |
| Styling    | Tailwind CSS 3           |
| Animation  | Framer Motion            |
| Icons      | react-icons              |
| CI/CD      | GitHub Actions → Pages   |

## Project structure

```
.
├── .github/workflows/deploy.yml   # CI/CD: build + deploy to Pages on push to main
├── public/
│   └── assets/images/             # All images, favicons, manifest
├── src/
│   ├── components/                # One file per section (Hero, About, Skills, …)
│   ├── data/                      # ★ Edit these to update content
│   │   ├── profile.js             #   about text, experience, education, socials
│   │   ├── skills.json            #   skills + certificate links
│   │   ├── projects.json          #   projects & publications
│   │   └── blogs.json             #   blog / post links
│   ├── hooks/                     # useTypingEffect (hero typewriter)
│   ├── lib/assets.js              # image path helper
│   ├── App.jsx                    # section layout
│   ├── main.jsx                   # entry point
│   └── index.css                  # Tailwind + global styles
├── index.html
├── tailwind.config.js
└── vite.config.js
```

## Editing content

You almost never need to touch component code — just edit the files in `src/data/`:

- **New project** → add an object to `projects.json` and drop the image in `public/assets/images/projects/`.
- **New blog** → add an object to `blogs.json`.
- **New skill** → add an object to `skills.json`.
- **About / experience / education** → edit `profile.js`.

## Local development

```bash
npm install     # install dependencies
npm run dev     # start dev server (http://localhost:5173)
npm run build   # production build → dist/
npm run preview # preview the production build
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages.

> **One-time setup:** In the repo → **Settings → Pages → Build and deployment →
> Source**, select **GitHub Actions** (instead of "Deploy from a branch").
