# Rugandura Maurice — Personal Portfolio

A modern personal portfolio website showcasing Rugandura Maurice’s software engineering background, skills, projects, education, practical experience, GitHub repositories, LinkedIn profile, and CV.

## Technologies

- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Assets to add

Place the supplied profile photo at `public/images/profile.jpeg` and the one-page CV at `public/cv/Rugandura-Maurice-CV.pdf`. The site already references these production-safe paths.

## Deploy to Vercel

### GitHub Pages

This project includes a deployment workflow at `.github/workflows/deploy.yml`. After pushing it to the `main` branch, open **Settings → Pages** in the GitHub repository and select **GitHub Actions** as the source. The site will publish at `https://mauricerugandura.github.io/portfolio/`.

### Vercel

Alternatively, import the repository in Vercel and keep the detected Vite settings (`npm run build`, output directory `dist`). Vercel will deploy the static site and retain the public image and CV paths.
