import React, { Component } from 'react';

import path from 'path';

const styles = {
  div: {
    marginTop: '20%',
    display: 'inlineBlock',
    verticalAlign: 'middle',
    opacity: '0.8'
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
        <div className="col-sm-12 col-md-12 col-lg-12" style={styles.div}>
          <div className="row text-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <a href="./build/DannyLim_Resume" target="_blank"><img src="./build/images/Splash.png" className="splashLogo"/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
