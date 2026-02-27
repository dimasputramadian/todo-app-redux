import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import TodoList from "../components/TodoList";

function renderWithStore(preloadedState) {
  const store = configureStore({
    reducer: { todos: todosReducer },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

describe("TodoList Component", () => {
  test("renders todos from store", () => {
    const state = {
      todos: {
        items: [
          { id: 1, title: "Test Todo 1", completed: false },
          { id: 2, title: "Test Todo 2", completed: true },
        ],
        loading: false,
        error: null,
      },
    };

    renderWithStore(state);

    expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Test Todo 2")).toBeInTheDocument();
  });
});