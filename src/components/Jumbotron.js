import React, { Component } from 'react';

import path from 'path';

const styles = {
  background: {
    'position': 'relative',
    'background': 'url(http://i.imgur.com/JcQWXoO.jpg) no-repeat center center',
    'width': '100%',
    'minHeight': '700px',
    'backgroundSize': '100%',
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
      <div className="jumbotron" style={styles.background}>
        <div className="container">
          <div className="col-sm-6 col-md-4 col-lg-4 text-center" style={styles.name}>
            <div className="row">
              <h1>DANNY LIM</h1>
            </div>
            <div className="row">
              <h4>Fullstack JavaScript Developer</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
