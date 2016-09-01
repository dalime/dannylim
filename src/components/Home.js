import React, { Component } from 'react';

import NavBar from './NavBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Home extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <h1 className="text-center">Danny Lim</h1>
        </div>
      </MuiThemeProvider>
    )
  }
}
