import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  blog: {
    'marginTop': '30px',
    'marginBottom': '30px'
  },
  iframe: {
    'width': '50%',
    'minHeight': '200px'
  }
}

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
  }

  navigate() {
    console.log ('hello');
  }

  render() {
    return (
      <div id="blog" className="text-center container" style={styles.blog}>
        <h2>BLOG</h2>
        <p>See below for my latest blog post.</p>
        <iframe
          src="http://www.wordpress.com/dalime"
          frameBorder="0"
          style={styles.iframe}
        >
        </iframe>
        <br />
        <RaisedButton
          onClick={this.navigate}
          label='BLOG'
          primary={true}
        />
      </div>
    )
  }
}
