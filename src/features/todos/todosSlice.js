import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchTodosAPI,
  addTodoAPI,
  deleteTodoAPI,
  toggleTodoAPI,
} from "./todosThunks";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => await fetchTodosAPI()
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo) => await addTodoAPI(todo)
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => await deleteTodoAPI(id)
);

export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async (todo) => await toggleTodoAPI(todo)
);

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false;
        state.error = "Gagal ambil data";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (todo) => todo.id !== action.payload
        );
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (t) => t.id === action.payload.id
        );
        if (index !== -1) state.items[index] = action.payload;
      });
  },
});

export default todosSlice.reducer;