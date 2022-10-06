const updateTodo = (e) => {
  const clicked = e.target.closest('.todo-description');
  if (!clicked) return;
  clicked.addEventListener('keyup', () => {
    const taskList = JSON.parse(localStorage.getItem('todos')) || [];
    const targetData = parseInt(clicked.getAttribute('data-desc'), 10);
    const update = taskList.find((todo) => todo.index === targetData);
    update.description = clicked.value.trim();
    localStorage.setItem('todos', JSON.stringify(taskList));
  });
};

export default updateTodo;