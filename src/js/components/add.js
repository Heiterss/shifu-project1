import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class Add extends Component {

  add() {

    var title = this.refs.title.value;
    if(localStorage.getItem('works') == null) {
      var works= []
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

  render() {
    return(

     <div className='row'>
     <div className='container'>
       <h2> Add to List </h2>
     </div>
        <form className='col-md-4'>
        <input type="text" className='form-control' placeholder="Писать тут" ref="title" />
        <input type="button" className='btn btn-outline-primary' value="Добавить" onClick={this.add.bind(this)} /> <div className='btn btn-outline-warning'>
  				<Link to='/Admin' className='align-right'>Вернуться</Link>
  			</div>
        </form>
     </div>
    )
  }
}
