
import React, { useEffect, useRef, useState } from "react"
import "./styles/app.css"

const DEFAULT_TASKS = [
  {
    id: 1,
    title: "Review TaskFlow project requirements",
    completed: false,
  },
  {
    id: 2,
    title: "Complete Milestone 1 documentation",
    completed: true,
  },
]

const STORAGE_KEY = "taskflow-tasks"

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY)

      if (savedTasks !== null) {
        const parsedTasks = JSON.parse(savedTasks)

        if (Array.isArray(parsedTasks)) {
          return parsedTasks
        }
      }
    } catch (error) {
      console.error("Could not load saved tasks:", error)
    }

    return DEFAULT_TASKS
  })

  const [newTask, setNewTask] = useState("")
  const taskInputRef = useRef(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch (error) {
      console.error("Could not save tasks:", error)
    }
  }, [tasks])

  function addTask(event) {
    event.preventDefault()

    const trimmedTask = newTask.trim()

    if (!trimmedTask) {
      taskInputRef.current?.focus()
      return
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: Date.now(),
        title: trimmedTask,
        completed: false,
      },
    ])

    setNewTask("")
    taskInputRef.current?.focus()
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length

  return (
    <main className="app">
      <header className="header">
        <div>
          <p className="eyebrow">PRODUCTIVITY APP</p>
          <h1>TaskFlow</h1>
          <p className="subtitle">
            Organize your work and keep your goals moving forward.
          </p>
        </div>

        <div className="progress" aria-live="polite">
          <strong>{completedTasks}</strong>
          <span>of {tasks.length} completed</span>
        </div>
      </header>

      <section className="task-card">
        <h2>My Tasks</h2>

        <form onSubmit={addTask} className="task-form">
          <input
            ref={taskInputRef}
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            aria-label="New task title"
          />

          <button type="submit">Add Task</button>
        </form>

        <div className="task-list">
          {tasks.map((task) => (
            <label
              key={task.id}
              className={`task ${task.completed ? "completed" : ""}`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                aria-label={`Mark "${task.title}" ${
                  task.completed ? "incomplete" : "complete"
                }`}
              />

              <span>{task.title}</span>

              {task.completed && (
                <span className="completion-status">
                  Completed
                </span>
              )}
            </label>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
