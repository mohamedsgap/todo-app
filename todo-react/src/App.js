import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [], 
    }
  }
  addTodo() {
    const text = prompt("Todo text please")
    this.setState({
      todos: [...this.state.todos, 
        {id: id++, text, checked: false}
      ],
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id, 
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }
  render(){
  return (
    
    <div className="App">
      <h3>ToDo App by Mohamed Abdel Nasser</h3>
      <div>Todo count: {this.state.todos.length}</div>
      <div>Unchecked Todo count: {this.state.todos.filter(todo => !todo.checked).length}</div>
      <button onClick={()=> this.addTodo()}>Add ToDo</button>
     <ul>
       {this.state.todos.map(todo => (
       <Todo 
       onToggle={()=> this.toggleTodo(todo.id)}
       onDelete={()=> this.removeTodo(todo.id)} 
       todo={todo}
       />
       ))}
     </ul>
    </div>
  )
  }
}
let id = 0
const Todo = props => (
  <li>
    <input type='checkbox' checked={props.todo.checked} onChange={props.onToggle}/>
    <button onClick={props.onDelete}>delete</button>
    <span>{props.todo.text}</span>
  </li>
)

export default App;
