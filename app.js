//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions

function addTodo(event){
  //prevent default form behavior
  event.preventDefault();

  //todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //check button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  //delete button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-times"></i>';
  deleteButton.classList.add('delete-btn');
  todoDiv.appendChild(deleteButton);

  //append to list
  todoList.appendChild(todoDiv);

  //clear input
  todoInput.value = '';
}

function deleteCheck(e) {
  const item = e.target;

  //delete todo
  if(item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    todo.remove();
  }

  //check mark
  if(item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}