import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodosAPI = async () => {
  const res = await axios.get(`${API}?_limit=5`);
  return res.data;
};

export const addTodoAPI = async (todo) => {
  const res = await axios.post(API, todo);
  return res.data;
};

export const deleteTodoAPI = async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
};

export const toggleTodoAPI = async (todo) => {
  const res = await axios.put(`${API}/${todo.id}`, {
    ...todo,
    completed: !todo.completed,
  });
  return res.data;
};