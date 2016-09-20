import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import NavBar from './NavBar';
import Connect from './Connect';
import Footer from './Footer';
import Jumbotron from './Jumbotron';
import About from './About';
import Portfolio from './Portfolio';
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
          <Portfolio />
          <Blog />
          <Connect />
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}
