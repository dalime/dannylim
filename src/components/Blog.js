import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  blog: {
    'marginTop': '30px',
    'marginBottom': '30px'
  },
  iframe: {
    'width': '50%',
    'minHeight': '400px'
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
        <p>I like to share my thoughts on <a href='https://dalime5.wordpress.com/'>wordpress</a>. Here's my latest <a href='https://dalime5.wordpress.com/2016/08/29/firebase-and-react/'>post.</a></p>
        <iframe
          src="https://dalime5.wordpress.com/2016/08/29/firebase-and-react/"
          frameBorder="0"
          style={styles.iframe}
        >
        </iframe>
      </div>
    )
  }
}
