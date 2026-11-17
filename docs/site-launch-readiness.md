# Site Launch Readiness — TaskFlow

**Course:** WDV349 — Site Launch  
**Prepared:** November 16, 2026  
**Production URL:** https://taskflow-chi-self-98.vercel.app/  
**Repository:** https://github.com/AlvarezJhonn-FS/2605-WDV349-AlvarezJhonn  
**Reviewed branch/commit:** `dev` / `e5e5332`

## Verified launch evidence

- [x] GitHub branch `dev` was pushed successfully through the `AlvarezJhonn-FS` account.
- [x] A Vite production build completed successfully in the developer's terminal.
- [x] Production HTML returned the updated page title, meta description, robots directive, canonical URL, Open Graph metadata, and Twitter metadata.
- [x] The developer confirmed that `/robots.txt` and `/sitemap.xml` load.
- [x] The sitemap contains the production homepage URL.
- [x] A Vercel deployment for commit `e5e5332` was shown as Ready. Vercel's Production Branch was changed to `dev`; subsequent production HTML verification returned the updated title.

## Current application scope confirmed from source

The current React application supports:
- Adding a non-empty task.
- Rejecting blank/whitespace-only task submissions.
- Marking tasks complete and reopening them.
- Displaying the completed-task count.
- Saving task state in browser `localStorage`.

The current source does not include task editing or deletion controls. Task data is browser/device-specific and does not synchronize to an account or across devices.

## Outstanding checks — do not mark complete until executed

### Analytics
- [ ] Enable and configure a web analytics provider for the production domain.
- [ ] Confirm pageviews appear in the provider dashboard.
- [ ] If custom events are implemented, verify task-created, task-completed, and task-reopened events.
- [ ] Confirm no task titles, descriptions, or personal content are sent to analytics.
- [ ] Review the privacy notice, consent, and provider settings.

At the last Vercel dashboard review, Web Analytics and Speed Insights were shown as **Not Enabled**. Functional analytics collection has not yet been demonstrated.

### Live functional QA
- [ ] Create a valid task and confirm it appears once.
- [ ] Submit an empty or whitespace-only task and confirm no blank task is added.
- [ ] Complete a task and confirm the progress count increases.
- [ ] Reopen a task and confirm the progress count decreases.
- [ ] Compare the progress count with the number of completed tasks.
- [ ] Refresh the page and confirm tasks and completion status persist.
- [ ] Test at desktop and mobile widths; check for overflow and usable controls.
- [ ] Check browser console and network panel for errors.

The source code was reviewed, but these live browser tests are not claimed as completed in this document. Earlier project documentation records a persistence check, but the deployed version should be retested.

### Search visibility
- [ ] Verify the production domain in Google Search Console.
- [ ] Submit `https://taskflow-chi-self-98.vercel.app/sitemap.xml`.
- [ ] Verify the domain in Bing Webmaster Tools and submit the sitemap if required.
- [ ] Review crawl/indexing reports after search engines process the site.

## Submission artifacts

- Launch announcement: `docs/site-launch-announcement.md`
- Site launch readiness: `docs/site-launch-readiness.md`

## Accuracy note

This document separates evidence already supplied and verified from actions that still require dashboard access or manual browser testing. Do not report analytics as active or QA tests as passed until the results have been observed and recorded.
