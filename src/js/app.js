import '../css/style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Rout from './router';

class Root extends Component {
  render() {
    return (
     <div>
      <Rout />
     </div>
    )
  }
}
render(<Root />, document.getElementById('root'));
