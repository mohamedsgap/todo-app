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

  function count(arr, func){
      return arr.reduce((acc, next) => func(next) ? acc +1 : acc , 0); 
  }


