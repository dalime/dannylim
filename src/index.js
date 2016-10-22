import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import Splash from './components/Splash';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';

import './style.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Splash} />
      <Route path='about' component={About} />
      <Route path='skills' component={Skills} />
      <Route path='projects' component={Projects} />
      <Route path='connect' component={Connect} />
    </Route>
  </Router>
  , document.getElementById('root')
);
