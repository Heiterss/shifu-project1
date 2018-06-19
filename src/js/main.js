import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import Header from '../components/header';
import TodoInput from '../components/listinput';
import TodoItem from '../components/todoitem';

class Root extends React.Component {

  constructor(props) {
    super(props);

    this.state= {
      todos: [
        {id: 0, text: "Something!"},
        {id: 1, text: "Something!"},
        {id: 3, text: "Something!"},
        {id: 4, text: "Something!"},
        {id: 5, text: "Something!"},
        {id: 6, text: "Something!"},
        {id: 7, text: "Something!"},
        {id: 8, text: "Something!"},
        {id: 9, text: "Something!"}
      ],
      nextId: 10
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

addTodo(todoText) {
  let todos = this.state.todos.slice();
  todos.push({id: this.state.nextId, text: todoText});
  this.setState({
    todos: todos,
    nextId: ++this.state.nextId
  })
}

removeTodo(id) {
  this.setState({
    todos: this.state.todos.filter((todo, index) => todo.id !== id)
  })
}
render() {
    return (
      <div>
        <Header />
        <TodoInput todoText="" addTodo={this.addTodo}/>
        <ul>
        {
          this.state.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
          })
        }
        </ul>
      </div>
    );
  }
}
render(<Root />, document.getElementById('root'));
