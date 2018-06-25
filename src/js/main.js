import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './app';

const history = createBrowserHistory();

const Home = () => (
  <div>
   <h1>Main Page</h1>
  </div>
);

const Admin = () => (
  <div>
   <App />
  </div>
)

class Root extends Component {
  render() {
    return (
<BrowserRouter history={history}>
  <div>
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/admin">List</Link></li>
      </ul>

        <hr/>


         <Route exact path="/" component={Home} />
         <Route path="/admin" component={Admin} />
   </div>
</BrowserRouter>
    )
  }
}
render(<Root />, document.getElementById('root'));
