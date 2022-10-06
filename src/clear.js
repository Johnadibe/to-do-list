const clearToDo = (e) => {
  const clicked = e.target.closest('.checkbox');
  if (!clicked) return;
  const targetData = parseInt(clicked.getAttribute('data-check'), 10);
  const taskList = JSON.parse(localStorage.getItem('todos')) || [];
  const update = taskList.find((todo) => todo.index === targetData);
  update.completed = !update.completed;
  localStorage.setItem('todos', JSON.stringify(taskList));
};

export default clearToDo;