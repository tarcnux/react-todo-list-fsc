import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../Components/Title";

function TaskPage() {
  // This component displays the details of a task.
  // It uses the useNavigate hook to navigate back to the previous page.
  const navigate = useNavigate();
  // It uses the useSearchParams hook to access search parameters from the URL.
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "Default Title";
  const description = searchParams.get("description") || "Default Description";

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            className="absolute left-0 top-0 bottom-0 text-slate-100"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md shadow">
          <p className="text-slate-600 text-xl font-bold">Título: {title}</p>
          <p className="text-slate-600">Descrição: {description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
