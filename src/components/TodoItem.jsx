import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todos/todosSlice";
import React from "react";
function TodoItem({ todo }) {
    const dispatch = useDispatch();

    return (
        <div
            className={`flex items-center justify-between border rounded-xl px-4 py-3 shadow-sm transition
    ${todo.completed ? "bg-gray-100" : "bg-white hover:shadow-md"}
  `}
        >
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(todo))}
                    className="w-5 h-5"
                />
                <p
                    className={`${todo.completed
                            ? "line-through text-gray-400"
                            : "text-gray-700"
                        }`}
                >
                    {todo.title}
                </p>
            </div>

            <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-gray-400 hover:text-red-500 transition"
            >
                🗑
            </button>
        </div>
    );
}
export default React.memo(TodoItem)