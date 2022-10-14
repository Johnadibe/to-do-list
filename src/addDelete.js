const todoInput = document.querySelector('.to-do-input'); //eslint-disable-line

export let todos = []; //eslint-disable-line

export const addTodo = (todoInput, todos) => {
  const list = {
    description: todoInput.value.trim(),
    completed: false,
    index: todos.length,
  };
  todos.push(list);
};

export const deleteTodo = (index, todos) => {
  const newTodo = todos.filter((element) => element.index !== index);
  todos.length = 0;
  let i = 1;
  newTodo.forEach((element) => {
    element.index = i;
    i += 1;
  });
  todos.push(...newTodo);
};

export const storeTodo = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getTodo = () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
};