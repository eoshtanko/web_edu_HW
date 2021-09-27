import React, { useState } from "react";
import TaskAdd from "./components/TaskAdd";
import TaskList from "./components/TaskList";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function addTask(name, description) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false, description: description };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="todoapp stack-large">
      <TaskAdd addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
