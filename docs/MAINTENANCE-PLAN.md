# TaskFlow Website Maintenance Plan

**Prepared:** November 21, 2026  
**Application:** TaskFlow  
**Production:** https://taskflow-chi-self-98.vercel.app/  
**Repository:** https://github.com/AlvarezJhonn-FS/2605-WDV349-AlvarezJhonn  
**Production branch:** `dev`

## 1. Purpose and scope

This plan defines recurring content, technical, deployment, quality, and security checks for the current TaskFlow React/Vite frontend hosted on Vercel. Task data is stored in each user's browser using `localStorage`; the reviewed application does not use a central application database.

## 2. Maintenance schedule

| Frequency | Task | Procedure and evidence |
|---|---|---|
| Weekly | Availability and smoke test | Open production; add a temporary task, complete/reopen it, refresh, and confirm persistence. Record date and defects. |
| Weekly | Deployment review | Review Vercel deployment status and build/runtime logs. Confirm the production deployment is Ready. |
| Monthly | Dependency and security review | Review npm dependency updates and advisories. Apply updates on a working branch; run `npm run build` and QA before release. |
| Monthly | SEO and link review | Check page title, description, canonical URL, `robots.txt`, `sitemap.xml`, social metadata, and links. Confirm sitemap URLs match the production domain. |
| Monthly | Responsive and accessibility review | Test mobile and desktop widths, keyboard operation, focus visibility, labels, contrast, and readability. |
| Quarterly | Content and scope review | Review app copy, README, launch information, and feature limitations. Remove stale claims and document approved changes. |
| Quarterly | Access and recovery review | Review GitHub and Vercel access. Confirm a maintainer can clone, build, and redeploy using the documented process. |
| Before each release | Release validation | Review code changes, install dependencies if changed, run build and QA, deploy, and verify production endpoints. |

## 3. Functional release checklist

- [ ] A non-empty task can be created and appears once.
- [ ] Blank or whitespace-only input does not create a task.
- [ ] Completing a task changes its state and increments the completed count.
- [ ] Reopening a task restores its active state and decrements the count.
- [ ] The displayed completed count matches the completed tasks.
- [ ] Tasks and completion state remain after refreshing the same browser.
- [ ] Controls remain usable at desktop and mobile widths.
- [ ] `npm run build` completes without errors.

## 4. Backup and recovery

TaskFlow stores task data in the visitor's browser `localStorage`. There is no central TaskFlow database or server-side user-data backup to schedule. Clearing browser storage, changing browsers/devices, or using private browsing may remove or isolate task data. Preserve source code through Git history and create dated release tags or approved archives for significant releases. Do not claim that user task data is centrally backed up.

## 5. Security and privacy

Limit repository and hosting access to authorized maintainers. Never commit passwords, API keys, access tokens, or private SSH keys. If analytics is added, collect only necessary aggregate events; do not transmit task names, descriptions, email addresses, or other user-entered content. Review provider privacy, consent, retention, and opt-out settings before enabling tracking.

## 6. Incident and defect handling

1. Record the date, browser/device, reproduction steps, expected behavior, and actual behavior.
2. Determine whether production users are affected.
3. Create or update a GitHub issue.
4. Fix the problem on a non-production working branch.
5. Run relevant checks and `npm run build`.
6. Deploy through the documented GitHub-to-Vercel workflow.
7. Verify the production fix and close the issue with evidence.

For severe regressions, identify a known-good deployment in Vercel's deployment history and follow the team's rollback procedure.

## 7. Maintenance log

| Date | Task/check | Result | Issue/follow-up | Maintainer |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## 8. Open verification items

The launch evidence reviewed for this handoff did not confirm functional analytics collection, Google Search Console verification, or completion of all live manual QA tests. The receiving maintainer should close these items explicitly and record evidence before marking them complete.
