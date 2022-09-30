import './index.css';

const listData = [{
  description: 'wash the dishes',
  completed: true,
  index: 1,
},
{
  description: 'complete To Do list project',
  completed: true,
  index: 2,
},
{
  description: 'prepare for a seminar',
  completed: true,
  index: 3,
},
];

window.addEventListener('load', () => {
  const ul = document.querySelector('.to-do-lists');
  for (let i = 0; i < listData.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.classList = 'item';
    listData.id = listData[i].index;
    ul.appendChild(listItem);

    const input = document.createElement('input');
    input.classList = 'checkbox';
    input.type = 'checkbox';
    listItem.appendChild(input);

    const description = document.createElement('p');
    description.classList = 'description';
    description.innerHTML = listData[i].description;
    listItem.appendChild(description);

    const dragBtn = document.createElement('button');
    dragBtn.classList = 'drag-btn';
    dragBtn.innerHTML = '&#65049';
    listItem.appendChild(dragBtn);
  }
});