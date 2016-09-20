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
      <div className="jumbotron">
        {/* <h1 className="text-center" style={styles.name}>Danny Lim</h1> */}
        <h1 className="text-center">Danny Lim</h1>
      </div>
    )
  }
}
