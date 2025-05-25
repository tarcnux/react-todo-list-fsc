import { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";
import { v4 } from "uuid";
import Title from "./Components/Title";

function App() {
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await response.json();
      const initialTasks = data.map((task) => ({
        id: v4(),
        title: task.title,
        description: "This is a placeholder description",
        isCompleted: task.completed,
      }));
      setTasks(initialTasks);
    };
    //fetchTasks();
  }, []);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onTaskClick = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const onDeleteTaskClick = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const onAddTaskSubmit = (newTask) => {
    if (!newTask.title || !newTask.description) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    newTask.id = v4(); // Use v4 to generate a unique ID
    newTask.isCompleted = false;
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
export default App;
