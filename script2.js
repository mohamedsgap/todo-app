const classNames = {
    DELETE_BUTTON: 'delete-button',
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
}

const list = document.getElementById('todo-list');
const itemCountDiv = document.getElementById('item-count');
const uncheckedCountDiv = document.getElementById('unchecked-count');


let todos = [];

function count(arr, func) {
    return arr.reduce((acc, next) => func(next) ? acc + 1 : acc, 0);
}

function Todo(name) {
    this.name = name || 'New TODO'
    this.checkbox = null
    this.element = null
    this.checked = false
}

Todo.prototype.toggleCheck = function () {
    this.checked = !this.checked
    if (this.element && this.checked) {
        this.checkbox.checked = this.checked;
    } else {
        this.element = renderTodo(this);
    }
}

function renderTodo(todo) {
    if (todo.element) return todo.element


    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&times'
    deleteButton.className = classNames.DELETE_BUTTON
    // keep reference of todo on button so that it can be dereferenced in the callback
    deleteButton.onclick = removeTodo
    deleteButton.todoRef = todo


}


