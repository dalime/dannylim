import React, { Component } from 'react';

const styles = {
  jumbotron: {
    'backgroundColor': 'blue'
  }
}

export default class Jumbotron extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="jumbotron" style={styles.jumbotron}>
        <h1 className="text-center">DANNY LIM</h1>
      </div>
    )
  }
}
