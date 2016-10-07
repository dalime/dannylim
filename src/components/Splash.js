import React, { Component } from 'react';

import path from 'path';

const styles = {
  div: {
    marginTop: '20%',
    opacity: '0.8',
    textAlign: 'center'
  }
}

export default class Jumbotron extends Component {
  constructor() {
    super();

    this.state = {
      component: ''
    };
  }

  componentWillMount() {
    this.setState({component: 'componentIn'});
  }

  render() {
    return (
      <div className={this.state.component}>
        <div className="container text-center home" style={styles.div}>
          <a href="./build/DannyLim_Resume.pdf" target="_blank"><img src="./build/images/Splash.png" className="img-responsive splashLogo" /></a>
        </div>
      </div>
    )
  }
}
