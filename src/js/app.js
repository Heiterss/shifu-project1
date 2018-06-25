import React, { Component } from 'react';

export default class ToDo extends Component {

  constructor() {
    super();
    this.state = {
      works: [
         'Something',
         'Something',
         'Something',
         'Something',
         'Something',
         'Something',
         'Something',
         'Something',
         'Something',
         'Something'
       ]
    };
  }

  add() {
    var title = this.refs.title.value;
    if(localStorage.getItem('works') == null) {
      var works= [
         'Something',
         'Something',
         'Something',
         'Something',
         'Something',
         'Something',
         'Something',
         'Something',
         'Something',
         'Something'
       ]
      works.push(title);
      localStorage.setItem('works', JSON.stringify(works));
    } else {
      var works = JSON.parse(localStorage.getItem('works'))
      works.push(title);
      localStorage.setItem('works', JSON.stringify(works));
    }
    this.setState({
      works: JSON.parse(localStorage.getItem('works'))
    });
  }

  delete(e) {
    var index = e.target.getAttribute('data-key');
    var list = JSON.parse(localStorage.getItem('works'));
    list.splice(index, 1);
    this.setState({
      works: list
    });
    localStorage.setItem('works', JSON.stringify(list));
  }

  render() {
    return(
     <div>
        <h2>List</h2>
        <input type="text" placeholder="Писать тут" ref="title" />
        <input type="button" value="Добавить" onClick={this.add.bind(this)} />

        <ul>
            {this.state.works.map(function(work, index){
                return (
                  <li key={index}>{work} <input type="button" value="Удалить" onClick={this.delete.bind(this)} data-key={index} /></li>
                );
            }, this)}
        </ul>
     </div>
    )
  }
}
