/**
 * @jest-environment jsdom
 */

const { addTodo, deleteTodo } = require('../addDelete.js');
let todos = require('../addDelete.js');

describe('addTodo and deleteTodo', () => {
  test('add todo', () => {
    document.body.innerHTML = `<div class="container">
            <div class="d-flex to-do-header">
                <h3 class="to-do-title">To Do List</h3>
                <button class="refresh-btn">&#8634</button>
            </div>
    
            <form id="form-input" class="d-flex">
                <input type="text" class="to-do-input" placeholder="Add to your list..." />
                <button type="submit" class="add-btn">&#10550</button>
            </form>
    
            <ul class="to-do-lists">
            </ul>
            <div class="clear-all">
                <a href="#" class="clear-all-btn">Clear all completed</a>
            </div>
        </div>
    `;
    const todoInput = document.querySelector('.to-do-input');
    todos = [];
    todoInput.value = 'hello';
    addTodo(todoInput, todos);
    expect(todos).toHaveLength(1);
  });

  test('delete todo', () => {
    const index = 0;
    deleteTodo(index, todos);
    expect(todos).toHaveLength(0);
  });
});