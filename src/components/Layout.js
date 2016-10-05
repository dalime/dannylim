import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import NavBar from './NavBar';
import Connect from './Connect';
import Jumbotron from './Jumbotron';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Blog from './Blog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Jumbotron />
          <About />
          <hr />
          <Skills />
          <hr />
          <Projects />
          <hr />
          <Blog />
          <hr />
          <Connect />
        </div>
      </MuiThemeProvider>
    )
  }
}
