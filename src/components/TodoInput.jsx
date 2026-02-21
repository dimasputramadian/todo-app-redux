import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

export default function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const sanitized = text.trim();

    if (!sanitized) {
      alert("Todo tidak boleh kosong!");
      return;
    }

    dispatch(
      addTodo({
        title: sanitized,
        completed: false,
      })
    );

    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 w-full max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Tambah tugas baru"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Tambah
      </button>
    </form>
  );
}