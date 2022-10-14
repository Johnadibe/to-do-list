import './index.css';
import {
  todos, addTodo, deleteTodo, storeTodo, getTodo,
} from './addDelete.js';
import updateTodo from './updateTodo.js';
import clearToDo from './clear.js';

const formInput = document.querySelector('#form-input');
const todoLists = document.querySelector('.to-do-lists');
const todoInput = document.querySelector('.to-do-input');
const clearBtn = document.querySelector('.clear-all-btn');

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
getTodo();
displayTodo();

formInput.addEventListener('submit', (e) => {
  e.preventDefault();
  if (todoInput.value === '') return;
  addTodo(todoInput, todos);
  storeTodo(todos);
  getTodo();
  displayTodo();
  todoInput.value = '';
});

todoLists.addEventListener('click', (e) => {
  if (e.target.classList.contains('trash-btn')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    deleteTodo(index, todos);
    displayTodo();
    storeTodo(todos);
    getTodo();
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