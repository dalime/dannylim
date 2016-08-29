import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

import './css/style.css';

render((
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </Router>
),  document.getElementById('root')
);
