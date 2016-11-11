import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import NavBar from './NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: 'splash'
    };

    this.changeComponent = this.changeComponent.bind(this);
  }

  changeComponent(name) {
    // TO CHANGE COMPONENT RENDERED
    browserHistory.push(name);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <NavBar changeComponent={this.changeComponent}/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
