import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  blog: {
    'marginTop': '30px',
    'marginBottom': '30px'
  },
  iframe: {
    'width': '75%',
    'minHeight': '600px'
  }
}

export default class Blog extends Component {
  render() {
    return (
      <div id="blog" className="col-sm-12 col-md-12 col-lg-12 container text-center" style={styles.blog}>
        <h2 className='col-sm-12 col-md-12 col-lg-12'>BLOG</h2>
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
