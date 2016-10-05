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
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue100, lightGreenA100, grey900 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: lightGreenA100,
    accentColor: lightBlue100
  },
  appBar: {
    textColor: grey900
  }
});

export default class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar />
          <Jumbotron />
          <About />
          <hr />
          <Projects />
          <hr />
          <Skills />
          <hr />
          <Blog />
          <hr />
          <Connect />
        </div>
      </MuiThemeProvider>
    )
  }
}
