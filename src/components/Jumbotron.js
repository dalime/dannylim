import React, { Component } from 'react';

import path from 'path';

// const styles = {
//   name: {
//     'fontFamily': 'Roboto, sans-serif'
//   }
// }

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron text-center">
        {/* <h1 className="text-center" style={styles.name}>Danny Lim</h1> */}
        <h1>Danny Lim</h1>
        <h4>Fullstack JavaScript Developer</h4>
        <img src="images/background.png" />
      </div>
    )
  }
}
