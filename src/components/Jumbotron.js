import React, { Component } from 'react';

import path from 'path';

const styles = {
  background: {
    'backgroundImage': 'url(http://i.imgur.com/SGyYvTC.jpg)',
    'height': '1000px'
  }
}

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron text-center" style={styles.background}>
        <h1>Danny Lim</h1>
        <h4>Fullstack JavaScript Developer</h4>
      </div>
    )
  }
}
