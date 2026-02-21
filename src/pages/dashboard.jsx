import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../features/todos/todosSlice";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-center text-3xl font-bold text-blue-600 mb-8">
        TodoList_Dimzyy
      </h1>

      <TodoInput />
      <TodoList />
    </main>
  );
}