# TaskFlow Final Handoff Guide

**Production:** https://taskflow-chi-self-98.vercel.app/  
**Repository:** https://github.com/AlvarezJhonn-FS/2605-WDV349-AlvarezJhonn  
**Production branch:** `dev`

## Project overview

TaskFlow is a lightweight React/Vite task-management application. Current features include creating non-empty tasks, marking tasks complete or incomplete, viewing a completed-task count, and persisting task state in the same browser with `localStorage`.

## Repository structure

- `TaskFlow/` — application root, Vite configuration, package manifest, lockfile, HTML entry point, public assets, and source code.
- `TaskFlow/src/` — React application source and styles.
- `TaskFlow/public/` — public SEO files including `robots.txt` and `sitemap.xml`.
- `docs/` — project proposal, technology stack, milestone research and reviews, QA records, launch announcement, launch readiness report, design wireframes, and supporting documentation.
- `.github/` — repository workflow configuration, if present.

## Installation

Prerequisites: Node.js and npm.

```bash
git clone https://github.com/AlvarezJhonn-FS/2605-WDV349-AlvarezJhonn.git
cd 2605-WDV349-AlvarezJhonn/TaskFlow
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The first command creates the production build. The second serves that build locally for preview.

## Deployment

The reviewed Vercel production configuration uses the GitHub `dev` branch as the Production Branch. Commit and push approved changes to `dev`, then confirm the Vercel Production deployment reaches Ready. Verify the live URL after deployment. Preview deployments should not be mistaken for production releases.

## Technology

- React and React DOM
- JavaScript
- Vite
- CSS
- Browser `localStorage`
- Git and GitHub
- Vercel

## Current limitations

The reviewed version does not provide account-based login, cloud synchronization, cross-device storage, team collaboration, due dates, reminders, task editing, or task deletion. Task data remains local to the browser/device and may be lost if browser storage is cleared.

## Security and configuration

Do not commit credentials, API keys, passwords, access tokens, or private SSH keys. The reviewed frontend build does not require secret values. If future integrations add environment variables, document variable names and purposes without publishing their values; store real values in secure hosting settings.

## Handoff documents

- [Maintenance Plan](MAINTENANCE-PLAN.md)
- [Site Launch Announcement](site-launch-announcement.md)
- [Site Launch Readiness and QA Notes](site-launch-readiness.md)
- [Project Proposal](ProjectProposal.md)
- [Technology Stack](TechStack.md)
- [Milestone and QA documentation](./)

## Receiving-maintainer acceptance checklist

- [ ] Repository and Vercel access confirmed.
- [ ] Local installation and development server verified.
- [ ] Production build verified.
- [ ] Production branch and domain confirmed.
- [ ] Functional and responsive QA completed and recorded.
- [ ] SEO files reviewed after any domain/content change.
- [ ] Analytics status verified; do not assume it is active.
- [ ] Maintenance owner accepts the recurring schedule.
