import React, { Component } from 'react';

import NavBar from './NavBar';
import AppBar from './AppBar';
import Avatar from './Avatar';
import ContactInput from './ContactInput';
import Footer from './Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar />
          <Avatar />
          <NavBar />
          <h1 className="text-center">DANNY LIM</h1>
          <ContactInput />
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}
