import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      works: JSON.parse(localStorage.getItem('works'))
    };
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
        <div className='btn btn-outline-primary'>
  				<Link to='/Add' className='align-right'>Добавить запись</Link>
  			</div>
        <br/><br/>
        <ul>
            {this.state.works.map(function(work, index){
                return (
                  <li key={index}>{work}<input type="button" className='btn btn-danger' value="Удалить" onClick={this.delete.bind(this)} data-key={index} /></li>
                );
            }, this)}
        </ul>

     </div>
    )
  }
}
