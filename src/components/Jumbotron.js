import React, { Component } from 'react';

import path from 'path';

const styles = {
  background: {
    'position': 'relative',
    'background': 'url(http://i.imgur.com/JcQWXoO.jpg) no-repeat center center',
    'backgroundSize': '100%',
    'minHeight': '400px',
    'color': 'white',
    'display': 'flex',
    'alignItems': 'center'
  },
  name: {
    'backgroundColor': 'rgba(0,0,0,0.7)',
    'display': 'inline',
    'padding': '20px',
    'borderRadius': '10px'
  }
}

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron col-sm-12 col-md-12 col-lg-12" style={styles.background}>
        <div className="text-center" style={styles.name}>
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
