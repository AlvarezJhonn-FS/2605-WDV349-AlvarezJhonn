# Milestone 2: TaskFlow QA Testing

## 1. Purpose

This document defines test cases for validating TaskFlow's core task creation and completion workflows. The goal is to confirm that users can create tasks, mark tasks as completed, and view accurate completion progress.

## 2. Test Environment

- **Application:** TaskFlow
- **Framework:** React
- **Build tool:** Vite
- **Source branch:** `stage`
- **Test status:** Pending execution

## 3. Test Cases

### Test Case 1: Create a Valid Task

**Steps:**
1. Open TaskFlow.
2. Enter a task title in the input field.
3. Select **Add Task**.

**Expected result:** The new task appears in the task list, the input clears, and the total task count increases.

**Actual result:** Pending execution.

**Status:** Not tested.

### Test Case 2: Submit an Empty Task

**Steps:**
1. Leave the task input empty.
2. Select **Add Task**.

**Expected result:** No empty task is added to the task list.

**Actual result:** Pending execution.

**Status:** Not tested.

### Test Case 3: Complete a Task

**Steps:**
1. Select the checkbox beside an incomplete task.
2. Observe the task's appearance and completion count.

**Expected result:** The task is marked completed, and the completed count increases by one.

**Actual result:** Pending execution.

**Status:** Not tested.

### Test Case 4: Reopen a Completed Task

**Steps:**
1. Select the checkbox beside a completed task.
2. Observe the task's appearance and completion count.

**Expected result:** The task becomes incomplete, and the completed count decreases by one.

**Actual result:** Pending execution.

**Status:** Not tested.

### Test Case 5: Verify Completion Count

**Steps:**
1. Observe the initial task list and completed count.
2. Complete one incomplete task.
3. Reopen that task.

**Expected result:** The completed count updates correctly after each action.

**Actual result:** Pending execution.

**Status:** Not tested.

## 4. Results Summary

Testing has not yet been executed. Results will be recorded after the application is run and each test case is performed.

## 5. Known Limitations

The current application initializes tasks in React state. Persistence after refreshing the page has not been verified and should be evaluated separately if it is within the milestone scope.

## 6. Next Steps

- Execute each test case.
- Record the actual result and pass/fail status.
- Investigate any failed tests.
- Create follow-up issues for defects or usability improvements.
- Retest any behavior that changes.
