import React, { Component } from 'react';


export default class ListInput extends Component {


  render() {
    return (
      <div>
      <input type="text" placeholder="Писать тут" ref="title" />
      <input type="button" value="Добавить" onClick={this.add.bind(this)} />
      </div>
    )
  }
}
