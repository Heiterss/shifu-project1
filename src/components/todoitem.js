import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.removeTodo(this.props.id)}>Remove</button>{this.props.todo.text}
      </div>
    )
  }
}
