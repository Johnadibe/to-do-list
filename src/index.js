import './index.css';
import updateTodo from './updateTodo.js';
import clearToDo from './clear.js';

const formInput = document.querySelector('#form-input');
const todoLists = document.querySelector('.to-do-lists');
const todoInput = document.querySelector('.to-do-input');
const clearBtn = document.querySelector('.clear-all-btn');

let todos = JSON.parse(localStorage.getItem('todos'));
const displayTodo = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo) => {
      const completed = todo.completed ? 'checked' : '';
      li += `<li class="list-item">
                        <label for="">
                            <input type="checkbox" ${completed} class="checkbox" data-check="${todo.index}">
                            <input type="text" class="todo-description" data-desc="${todo.index}" value="${todo.description}">
                        </label>
                        <div class="trash-container">
                            <button class="trash-btn" id="${todo.index}">&#935;</button>
                        </div>
                    </li>`;
    });
  }
  todoLists.innerHTML = li;
};
displayTodo();

const addTodo = (e) => {
  e.preventDefault();
  const userInput = todoInput.value.trim();
  todoInput.value = '';
  if (!userInput) return;
  if (!todos) {
    todos = [];
  }
  const list = {
    description: userInput,
    completed: false,
    index: todos.length,
  };
  todos.push(list);
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTodo();
};

formInput.addEventListener('submit', addTodo);

const deleteTodo = (index) => {
  const newTodo = todos.filter((element) => element.index !== index);
  todos.length = 0;
  let i = 1;
  newTodo.forEach((element) => {
    element.index = i;
    i += 1;
  });
  todos.push(...newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTodo();
};

todoLists.addEventListener('click', (e) => {
  if (e.target.classList.contains('trash-btn')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    deleteTodo(index);
  }
});

todoLists.addEventListener('click', updateTodo);

clearBtn.addEventListener('click', () => {
  const clearSet = JSON.parse(localStorage.getItem('todos')) || [];
  const notCompleted = clearSet.filter((todo) => !todo.completed);
  todos.length = 0;
  let i = 0;
  notCompleted.forEach((element) => {
    element.index = i;
    i += 1;
  });

  todos.push(...notCompleted);
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTodo();
});

todoLists.addEventListener('click', clearToDo);