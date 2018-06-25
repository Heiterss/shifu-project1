import React from 'react';


export default class TodoInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

addTodo(todo) {
  if (todo.lenght > 0) {
    this.props.addTodo(todo);
    this.setState({value: ' '});
  }

}

  render() {
    return (
      <div>
       
      </div>
    )
  }
}
