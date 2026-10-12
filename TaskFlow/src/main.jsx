import React, { useRef, useState } from "react"
import { createRoot } from "react-dom/client"
import "./styles/app.css"

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review TaskFlow project requirements", completed: false },
    { id: 2, title: "Complete Milestone 1 documentation", completed: true },
  ])

  const [newTask, setNewTask] = useState("")
  const taskInputRef = useRef(null)

  function addTask(event) {
    event.preventDefault()

    if (!newTask.trim()) {
      taskInputRef.current?.focus()
      return
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask.trim(),
        completed: false,
      },
    ])

    setNewTask("")
    taskInputRef.current?.focus()
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const completedTasks = tasks.filter((task) => task.completed).length

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

        <div className="progress">
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
              />
              <span>{task.title}</span>
            </label>
          ))}
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
