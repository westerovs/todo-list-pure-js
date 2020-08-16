/* eslint-disable arrow-parens */
/* eslint-disable no-multiple-empty-lines */
/*
  абстрактная функция  вызова кнопок и аргументов
  null элемент для шаблона
  получать textContext у параграфа
*/

const todos = [
  'Найти жену',
  'Прогуляться по луне',
  'Сто миллионов',
  'Вечная молодость',
  'Пройти kingdom come',
];

const todosFormElement = document.querySelector('.todos__form');
const todosInputElement = document.querySelector('.todos__input');
const todosSubmitBtn = todosFormElement.querySelector('.todos__submit-btn');
const todosListElement = document.querySelector('.todos__list');
const todosTemplateElement = document.querySelector('.todo-template');

let editedElement = null;

// get buttons
function addTodoListeners(todo) {
  todo.querySelector('.todo__btn_type_edit').addEventListener('click', handleEdit);
  todo.querySelector('.todo__btn_type_copy').addEventListener('click', handleCopy);
  todo.querySelector('.todo__btn_type_delete').addEventListener('click', handleDelete);
}

// edit
function handleEdit(event) {
  console.log(event);
}

// copy
function handleCopy(event) {
  const todo = event.currentTarget.parentNode;
  const copy = todo.cloneNode(true);

  addTodoListeners(copy);
  todo.after(copy);
}

// delete
function handleDelete(event) {
  event.currentTarget.parentNode.remove();
}

// получить текст для редактирования
function setTodoToForm(todo) {

}

// сброс всего
function resetTodoForm() {
  editedElement = null;
  todosInputElement.value = '';
  todosSubmitBtn.textContent = 'Добавить';
}

function createTodo(text) {
  const todo = todosTemplateElement.content.cloneNode(true);

  todo.querySelector('.todo__text').innerHTML = text;
  addTodoListeners(todo);

  todosListElement.append(todo);
}

// кнопка добавить и проверка редактирование, или нет 
function handleFormSubmit(event) {
  event.preventDefault();

  const text = todosInputElement.value;

  if (editedElement) {
    editedElement.querySelector('.todo__text').textContent = text;
  } else {
    createTodo(text);
  }

  resetTodoForm();
}

todos.forEach(createTodo);
todosFormElement.addEventListener('submit', handleFormSubmit);














