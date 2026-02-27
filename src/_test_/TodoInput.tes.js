import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import TodoInput from "../components/TodoInput";

describe("TodoInput Component", () => {
  test("render input and button", () => {
    render(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );

    expect(screen.getByPlaceholderText(/add/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("can type in input", () => {
    render(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );

    const input = screen.getByPlaceholderText(/add/i);
    fireEvent.change(input, { target: { value: "Belajar React" } });

    expect(input.value).toBe("Belajar React");
  });
});