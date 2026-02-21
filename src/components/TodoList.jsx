import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const { items, loading } = useSelector((state) => state.todos);

  if (loading) {
    return (
      <p className="text-center mt-6 text-gray-500">
        Loading...
      </p>
    );
  }

  const incompleteTodos = items.filter((todo) => !todo.completed);
  const completeTodos = items.filter((todo) => todo.completed);

  return (
    <section className="mt-8 max-w-2xl mx-auto space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-blue-600 font-semibold text-lg">
            Belum Selesai
          </h2>
          <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
            {incompleteTodos.length}
          </span>
        </div>

        <div className="space-y-3">
          {incompleteTodos.length === 0 ? (
            <p className="text-gray-400 text-sm">
              Semua tugas sudah selesai 🎉
            </p>
          ) : (
            incompleteTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          )}
        </div>
      </div>

     
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-purple-600 font-semibold text-lg">
            Selesai
          </h2>
          <span className="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full">
            {completeTodos.length} dari {items.length}
          </span>
        </div>

        <div className="space-y-3">
          {completeTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>

    </section>
  );
}