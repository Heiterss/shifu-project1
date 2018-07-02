import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import MainPage from './components/main-page';
import App from './components/list';
import Add from './components/add';

const history = createBrowserHistory();

export default class Rout extends Component {
  render() {
     return (
        <Router>
           <div className="">
                 <li><Link className='p-2 text-dark' to={'/'}>Home</Link></li>
                 <li><Link className='p-2 text-dark' to={'/Admin'}>Admin</Link></li>
                 <li><Link className='p-2 text-dark' to={'/Add'}>Add</Link></li>
              <hr />

              <Switch>
                 <Route exact path='/' component={MainPage} />
                 <Route exact path='/Admin' component={App} />
                 <Route exact path='/Add' component={Add} />
              </Switch>
           </div>
        </Router>
     );
  }
}
