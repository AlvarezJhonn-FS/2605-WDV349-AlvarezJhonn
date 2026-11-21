# TaskFlow

TaskFlow is a lightweight task-management web application built to help students and busy individuals capture everyday tasks, mark work complete, and see progress in one focused list.

## Start here: Final handoff

- **[Final Handoff Guide](docs/FINAL-HANDOFF.md)** — project overview, repository map, installation, build, deployment, limitations, and receiving-maintainer checklist.
- **[Maintenance Plan](docs/MAINTENANCE-PLAN.md)** — weekly, monthly, quarterly, and release maintenance schedule.
- **[Live application](https://taskflow-chi-self-98.vercel.app/)**
- **[GitHub repository](https://github.com/AlvarezJhonn-FS/2605-WDV349-AlvarezJhonn)**

## Current features

- Create a task using the task-entry form.
- Mark tasks complete or incomplete.
- View the completed-task count.
- Preserve tasks and completion status in the same browser using `localStorage`.
- Responsive layout for desktop and smaller screens.

## Current scope and limitations

TaskFlow is currently a personal task list. Task data is stored in the browser on the device/browser where it was entered. The current version does not provide account-based access, cloud synchronization, team collaboration, due dates, reminders, task editing, or task deletion. These are potential future improvements, not released features.

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

Create and preview a production build:

```bash
npm run build
npm run preview
```

## SEO files

- Page metadata: `TaskFlow/index.html`
- Robots policy: `TaskFlow/public/robots.txt`
- XML sitemap: `TaskFlow/public/sitemap.xml`

## Project documentation

Research, planning, designs, milestone records, launch materials, QA notes, and handoff documents are maintained in `docs/`. See the [Final Handoff Guide](docs/FINAL-HANDOFF.md) for the repository map and maintainer instructions.

Analytics configuration and live event collection must be verified in the provider dashboard before being reported as active. QA results should be recorded only after tests are executed against the deployed application.
