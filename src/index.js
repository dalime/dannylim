import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';

import './style.css';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

ReactDOM.render(
  <Layout />, document.getElementById('root')
);

// {/* <Router history={browserHistory}>
//   <Route path='/' component={Layout} />
//   <Route path='/about' component={About} />
//   <Route path='/skills' component={Skills} />
//   <Route path='/projects' component={Projects} />
//   <Route path='/blog' component={Projects} />
//   <Route path='/connect' component={Connect} />
// </Router> */}
