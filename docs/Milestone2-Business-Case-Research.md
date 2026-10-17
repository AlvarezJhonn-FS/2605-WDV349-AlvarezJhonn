# Milestone 2: Business Case Research

## 1. Project Overview

TaskFlow is a task management and productivity web application designed to help users organize tasks, track completion, and manage their work through a simple interface.

## 2. Problem Statement

Users may struggle to keep track of responsibilities, prioritize work, and monitor progress when tasks are spread across different tools or informal lists. TaskFlow aims to provide a centralized and straightforward way to manage tasks and see completion progress.

## 3. Target Users and Use Cases

### Target Users
- Students managing coursework and deadlines.
- Freelancers organizing client work.
- Individuals managing personal responsibilities.
- Small teams coordinating simple task lists.

### Core Use Cases
1. A user creates a task.
2. A user marks a task as completed.
3. A user reviews task completion progress.
4. A user uses the interface to stay organized across daily responsibilities.

## 4. Google Success Stories and Product Lessons

### Case Study 1: Google Search and Continuous Improvement

Google explains that it evaluates proposed Search changes through experiments, quality evaluations, and review by experienced engineers and data scientists. Its published report states that in 2023, Google Search ran more than 700,000 experiments that resulted in over 4,000 improvements. The team evaluates user interactions and other measures before deciding whether a change should launch.

**Source:** Google Search, “Improving Search with rigorous testing.”

**URL:** https://www.google.com/search/howsearchworks/how-search-works/rigorous-testing/

**Lesson for TaskFlow:** TaskFlow should not rely exclusively on assumptions when deciding how its interface should work. Improvements to task creation, completion controls, and progress indicators should be evaluated against clear goals. Even small usability changes should be tested to determine whether they actually help users complete tasks more easily.

### Case Study 2: Google Workspace Customer Success

Google Workspace publishes customer stories describing how organizations use its products to collaborate and improve their workflows. These stories illustrate how productivity tools can support different organizations and work environments.

**Source:** Google Workspace, “Customer Success Stories.”

**URL:** https://workspace.google.com/intl/en_ie/customers/

**Lesson for TaskFlow:** Productivity software should address recognizable user needs rather than adding features simply because they are available. TaskFlow can begin with a focused set of functions—creating tasks, marking them complete, and viewing progress—before considering more complex capabilities. Future development should be guided by the needs of its target users.

### Research Summary

These examples suggest two useful principles for TaskFlow: continuously evaluate changes using evidence, and prioritize features that solve real workflow problems. Google’s scale and resources differ substantially from this student project, so its practices are useful as general lessons rather than a direct comparison of business performance.

## 5. A/B Testing and Validation Strategy

A/B testing compares two versions of an experience to determine which performs better against a defined objective. Google’s documentation describes comparing variations and measuring user responses. Firebase also supports experiments that measure whether changes improve important metrics before broader rollout.

**Sources:**
- Google Search Central, “Minimize A/B testing impact in Google Search”: https://developers.google.com/search/docs/crawling-indexing/website-testing
- Firebase, “Firebase A/B Testing”: https://firebase.google.com/docs/ab-testing

### Proposed TaskFlow Experiment

**Research question:** Can a revised task-entry interface help users add tasks more successfully and efficiently?

**Hypothesis:** A clearer task-entry control and more visible submission action will make task creation easier to understand.

**Version A:** The current task-entry interface.

**Version B:** A revised interface with clearer input guidance and a more prominent submission action.

**Primary metric:** Percentage of attempted task entries that result in a successfully created task.

**Secondary metrics:**
- Time required to create a task.
- Number of unsuccessful submission attempts.
- Number of input errors.
- User preference after trying both versions.

**Method:** Define the two versions before testing, use the same task-creation scenario for each, and record the results consistently. If the project does not have enough participants for a meaningful live experiment, conduct structured usability tests and describe the findings as preliminary rather than statistically conclusive.

**Decision criteria:** Prefer the revised interface only if the results indicate an improvement in successful task creation without introducing new usability problems. Document the results and limitations before deciding whether to adopt the change.

## 6. Agile Samurai: “Your First Plan”

In *The Agile Samurai*, Jonathan Rasmusson describes creating an initial agile plan by building a master story list. This list represents the features or user stories that customers want, is prioritized according to customer value, and is estimated by the development team. The list becomes the foundation for planning the project.

**Source:** Jonathan Rasmusson, *The Agile Samurai*, Chapter 8, Section 8.4, “Your First Plan.” The section is listed in the publisher's book contents.

Publisher reference: https://www.oreilly.com/library/view/the-agile-samurai/9781680500066/f_0011.html

### Application to TaskFlow

TaskFlow can apply this approach by maintaining a prioritized list of user stories and breaking larger goals into small, achievable issues. For example:

1. As a user, I want to create a task so that I can record work that needs to be completed.
2. As a user, I want to mark a task as complete so that I can track my progress.
3. As a user, I want to see completion progress so that I can understand how much work remains.

The GitHub issues and project board provide a practical way to organize these stories, identify priorities, and track progress. Estimates and priorities should be reviewed as the project develops rather than treated as permanent commitments.

### Planning Implications

The immediate priority should be a reliable, usable core task-management experience. Additional features should be considered after the core workflows are implemented and validated. This keeps the project focused, makes progress easier to demonstrate, and allows research and feedback to inform future iterations.

## 7. Business Case Summary

TaskFlow is intended to provide students, freelancers, and individuals with a straightforward way to organize daily responsibilities and monitor task completion. Its initial value proposition is simplicity: users can create tasks, mark them complete, and review progress without needing a complex project-management system.

The research supports three priorities:

1. **Usability:** Make the primary task workflows clear and reliable.
2. **Validation:** Evaluate proposed improvements using defined measures and structured testing.
3. **Incremental delivery:** Prioritize a small set of valuable features, track them through GitHub issues, and revise plans as evidence becomes available.

The next development cycle should focus on testing task creation and completion, documenting observed usability problems, and selecting improvements based on evidence. These activities can help determine whether TaskFlow's current feature set meets its intended user needs.

This business case establishes a rationale for continued development; it does not yet demonstrate market demand or prove that TaskFlow outperforms competing products. Those claims would require additional user research and comparative evidence.
## 8. References

Google. (n.d.). *Improving Search with rigorous testing*. Google Search. https://www.google.com/search/howsearchworks/how-search-works/rigorous-testing/

Google. (n.d.). *Customer success stories*. Google Workspace. https://workspace.google.com/intl/en_ie/customers/

Google Search Central. (n.d.). *Minimize A/B testing impact in Google Search*. Google for Developers. https://developers.google.com/search/docs/crawling-indexing/website-testing

Google. (n.d.). *Firebase A/B Testing*. Firebase Documentation. https://firebase.google.com/docs/ab-testing

Rasmusson, J. (2010). *The Agile Samurai: How Agile Masters Deliver Great Software*. Pragmatic Bookshelf. Chapter 8, Section 8.4, “Your First Plan.” https://www.oreilly.com/library/view/the-agile-samurai/9781680500066/f_0011.html
