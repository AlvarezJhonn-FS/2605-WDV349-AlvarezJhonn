# TaskFlow

TaskFlow is a lightweight task-management web application built to help students and busy individuals capture everyday tasks, mark work complete, and see progress in one focused list.

## Live application

- **Production:** https://taskflow-chi-self-98.vercel.app/
- **Repository:** https://github.com/AlvarezJhonn-FS/2605-WDV349-AlvarezJhonn

## Current features

- Create a task using the task-entry form.
- Mark tasks complete or incomplete.
- View the completed-task count.
- Preserve tasks and completion status in the same browser using `localStorage`.
- Responsive layout for desktop and smaller screens.

## Current scope and limitations

TaskFlow is currently a personal task list. Task data is stored in the browser on the device/browser where it was entered. The current version does not provide account-based access, cloud synchronization, team collaboration, due dates, reminders, task editing, or task deletion. These should be treated as potential future improvements, not released features.

## Technology

- React
- JavaScript
- Vite
- CSS
- Browser `localStorage`
- Git and GitHub
- Vercel deployment

## Local development

The application is located in `TaskFlow/`.

```bash
cd TaskFlow
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## SEO files

- Page metadata: `TaskFlow/index.html`
- Robots policy: `TaskFlow/public/robots.txt`
- XML sitemap: `TaskFlow/public/sitemap.xml`

The production page includes a descriptive title, meta description, canonical URL, robots directive, Open Graph metadata, and Twitter card metadata.

## Analytics and quality assurance

Analytics configuration and live event collection must be verified in the provider dashboard before being reported as active. QA results should be recorded only after the corresponding tests are executed against the deployed application. See [Site Launch Readiness](docs/site-launch-readiness.md).

## Project documentation

Research, planning, and weekly progress records are maintained in `docs/`.
