import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { lightBlue50 } from 'material-ui/styles/colors';

const styles = {
  blog: {
    'marginTop': '30px',
    'marginBottom': '30px',
    'padding': '10px'
  },
  iframe: {
    'width': '75%',
    'minHeight': '600px'
  }
}

export default class Blog extends Component {
  render() {
    return (
      <div style={styles.blog}>
        <div className="container text-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h2>BLOG</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <p>I like to share my thoughts on <a href='https://dalime5.wordpress.com/'>wordpress</a>. Here's my latest <a href='https://dalime5.wordpress.com/2016/09/28/accessing-frontend-data-with-react-and-redux/'>post.</a></p>
                <iframe
                  src="https://dalime5.wordpress.com/2016/09/28/accessing-frontend-data-with-react-and-redux/"
                  frameBorder="0"
                  style={styles.iframe}
                  >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
