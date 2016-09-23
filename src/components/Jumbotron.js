import React, { Component } from 'react';

import path from 'path';

const styles = {
  background: {
    'position': 'relative',
    'background': 'url(http://i.imgur.com/abt3Q0o.jpg) no-repeat center center',
    'width': '100%',
    'minHeight': '500px',
    'backgroundSize': '100%',
    'color': 'white',
    'display': 'flex',
    'alignItems': 'center'
  }
}

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron" style={styles.background}>
        <div className="container" style={styles.name}>
          <div className="row">
            <h1>DANNY LIM</h1>
          </div>
          <div className="row">
            <h4>Fullstack JavaScript Developer</h4>
          </div>
        </div>
      </div>
    )
  }
}
