const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0 ;
let uncheckedCount = 0;

function updateItemCount(diff) {
  itemCount += diff ;
  itemCountSpan.innerHTML= itemCount;
}

function updateUncheckedCount (diff) {
  uncheckedCount += diff ;
  uncheckedCountSpan.innerHTML(uncheckedCount);
}

function createTodo(name) {
  const checkbox = document.createElement('input');
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.type = 'checkbox';
  checkbox.onchange = toggleCheckbox();

  const span = document.createElement('span');
  span.className = classNames.TODO_TEXT;
  span.setAttribute('contenteditable', 'true');
  span.innerHTML = name || 'ToDO';


}

function newTodo() {
  alert('New TODO button clicked!')
}
