import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import TodoItem from "../components/TodoItem";

test("TodoItem matches snapshot", () => {

  // bikin store kosong dummy
  const store = configureStore({
    reducer: {
      todos: (state = []) => state, // reducer dummy
    },
  });``

  const { asFragment } = render(
    <Provider store={store}>
      <TodoItem 
        todo={{ id: 1, text: "Belajar Testing", completed: false }} 
      />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});