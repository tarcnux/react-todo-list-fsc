import { ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();
  const onSeeDetailsClick = (task) => {
    const queryParams = new URLSearchParams();
    queryParams.set("title", task.title);
    queryParams.set("description", task.description);
    // Use navigate to redirect to the task details page with query parameters
    navigate(`/tasks?${queryParams.toString()}`);
  };

  if (!tasks || tasks.length === 0) {
    return (
      <div className="p-6 bg-slate-200 rounded-md shadow">
        <p className="text-center text-gray-500">Nenhuma tarefa encontrada.</p>
      </div>
    );
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => {
              onTaskClick(task.id);
            }}
            className={`bg-slate-400 w-full text-white p-2 rounded-md text-left ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted ? "✅ " : ""} {task.title}
          </button>

          <Button
            onClick={() => {
              onSeeDetailsClick(task);
            }}
          >
            <ChevronRightIcon />
          </Button>

          <Button
            onClick={() => {
              onDeleteTaskClick(task.id);
            }}
          >
            <Trash2 />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
