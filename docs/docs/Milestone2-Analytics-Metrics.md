# Milestone 2: TaskFlow Analytics and Metrics

## 1. Purpose

This document defines proposed metrics for evaluating TaskFlow's core task-management workflows. The goal is to determine whether users can create tasks, complete tasks, and understand their progress effectively.

These metrics are proposed for future validation. They are not measurements currently collected by TaskFlow.

## 2. Goals and Questions

This analytics plan will help answer the following questions:

- Can users create tasks successfully?
- Can users mark tasks as completed?
- Do users understand their task completion progress?
- How much time does task creation require?
- Where do users encounter errors or confusion?

## 3. Proposed Metrics

### Metric 1: Tasks Created

**Definition:** The number of successfully created tasks during a defined period.

**Purpose:** Establishes whether users can complete the task-entry workflow.

**Measurement:** Count successful task-creation events during a test session or reporting period.

**Development implication:** Investigate input controls and submission behavior if users have difficulty creating tasks.

### Metric 2: Tasks Completed

**Definition:** The number of tasks marked as completed during a defined period.

**Purpose:** Indicates whether users can complete the task-completion workflow.

**Measurement:** Count successful task-completion events during a test session or reporting period.

**Development implication:** Investigate the completion control and state updates if completion actions fail or are unclear.

### Metric 3: Task Completion Rate

**Definition:** The percentage of tasks created in a defined cohort that are completed by the end of a specified observation period.

**Calculation:** Completion rate = (tasks from the cohort completed by the deadline / total tasks created in that cohort) × 100.

**Purpose:** Provides a consistent way to examine task completion over time.

**Limitation:** This metric does not independently prove productivity. Results depend on task difficulty, the observation period, and user behavior.

### Metric 4: Time to Create a Task

**Definition:** The elapsed time between starting a task-entry attempt and successfully creating the task.

**Purpose:** Helps evaluate whether the task-entry workflow is efficient and understandable.

**Measurement:** Record start and successful submission times during structured usability testing.

**Development implication:** Examine unnecessary steps, unclear labels, and input friction if task creation takes longer than expected.

### Metric 5: Task-Entry Error Rate

**Definition:** The percentage of task-entry attempts that fail or require correction because of an input or interaction problem.

**Calculation:** Error rate = (failed or error-producing task-entry attempts / total task-entry attempts) × 100.

**Purpose:** Identifies problems that may prevent users from creating tasks successfully.

**Development implication:** Review validation messages, submission behavior, and input handling when errors occur.

## 4. Validation Approach

Initial validation can be conducted through structured usability testing rather than immediately implementing a production analytics platform.

### Proposed Test Procedure

1. Give each participant the same task-creation scenario.
2. Ask the participant to create a task.
3. Ask the participant to mark that task as completed.
4. Record successful actions, errors, and task-creation time.
5. Ask whether the completion state and progress information were understandable.
6. Summarize observations and identify recurring usability problems.

Use the same procedure for each participant to improve consistency. With a small number of participants, report findings as exploratory observations rather than statistically conclusive results.

## 5. Privacy and Data Minimization

Collect only the information needed to evaluate the intended workflows. For initial testing, avoid collecting unnecessary personal information or task descriptions. Use anonymized participant identifiers where appropriate, explain what is being recorded, and obtain permission before collecting participant data.

## 6. How Results Will Inform Development

The findings will help prioritize improvements to task creation, completion controls, error handling, and progress indicators.

- Repeated task-entry failures may justify improvements to input validation or submission feedback.
- Confusion about completion state may justify clearer visual feedback.
- Long task-entry times may justify simplifying the workflow.
- Questions about progress indicators may justify changes to how completion information is displayed.

Any proposed change should be tested again to determine whether it addresses the observed problem.

## 7. Limitations

The metrics in this document are proposed measures, not current analytics results. No verified measurement results are documented here. Conclusions about user behavior or product effectiveness must wait until testing is conducted and results are recorded.

## 8. References

Add sources used to support the metric definitions and testing methods. Include source titles, publishers, URLs, and publication dates where available.
