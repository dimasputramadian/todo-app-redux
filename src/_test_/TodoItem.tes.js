import { render, screen } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

describe("TodoItem Component", () => {
  const mockTodo = {
    id: 1,
    title: "Belajar Testing",
    completed: false,
  };

  test("renders todo title", () => {
    render(<TodoItem todo={mockTodo} />);

    expect(screen.getByText("Belajar Testing")).toBeInTheDocument();
  });
});