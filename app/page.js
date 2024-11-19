"use client";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Function to add the task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // Function to mark the task complete
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // Function to delete the task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="container mx-auto mt-10 p-4 bg-emerald-600">
      <h1 className="text-2xl font-bold text-center mb-6">To-Do List</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          className="border rounded-md px-3 py-2 w-2/3"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
  
      <ul className="list-none space-y-3">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="bg-gray-100 p-3 rounded-md flex justify-between items-center"
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTaskCompletion(t.id)}
                className="h-5 w-5 cursor-pointer"
              />
              <span
                className={`${
                  t.completed
                    ? "line-through text-gray-500"
                    : "text-indigo-900"
                }`}
              >
                {t.text}
              </span>
            </div>
            <button
              onClick={() => deleteTask(t.id)}
              className="text-indigo-900 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}
