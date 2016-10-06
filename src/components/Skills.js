import React, { Component } from 'react';

const styles = {
  skillLogo: {
    'width': '90%',
    'marginLeft': '5px',
    'marginRight': '5px',
    'verticalAlign': 'middle',
    'display': 'inline-block'
  }
}

export default class Skills extends Component {
  render() {
    return (
      <div className="container text-center" id="skills">
        <div className="row">
          <h2>SKILLS</h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-4">
            <a href="https://facebook.github.io/react/" target="_blank"><img src='http://i.imgur.com/zQahBhe.png' style={styles.skillLogo} /></a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <a href="http://redux.js.org/" target="_blank"><img src='http://i.imgur.com/WBX3dw3.png' style={styles.skillLogo} /></a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <a href="https://facebook.github.io/flux/docs/overview.html" target="_blank"><img src='http://i.imgur.com/amyOVGv.png' style={styles.skillLogo} /></a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <a href="https://www.w3.org/wiki/The_web_standards_model_-_HTML_CSS_and_JavaScript" target="_blank"><img src='http://i.imgur.com/gRThS84.png' style={styles.skillLogo} /></a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <a href="https://nodejs.org/en/" target="_blank"><img src='http://i.imgur.com/wIVDKOZ.png' style={styles.skillLogo} /></a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <a href="https://expressjs.com/" target="_blank"><img src='http://i.imgur.com/yJ8sJYj.png' style={styles.skillLogo} /></a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <a href="https://www.mongodb.com/" target="_blank"><img src='http://i.imgur.com/8wjJ5N7.png' style={styles.skillLogo} /></a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <a href="https://jquery.com/" target="_blank"><img src='http://i.imgur.com/4o07kcH.png' style={styles.skillLogo} /></a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <a href="https://www.mysql.com/" target="_blank"><img src='http://i.imgur.com/xwCEZDl.png?2' style={styles.skillLogo} /></a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <a href="https://webpack.github.io/" target="_blank"><img src='http://i.imgur.com/u8TYI4J.png?1' style={styles.skillLogo} /></a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <a href="http://getbootstrap.com/" target="_blank"><img src='http://i.imgur.com/7mp4LVQ.png' style={styles.skillLogo} /></a>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <a href="https://www.asp.net/" target="_blank"><img src='http://i.imgur.com/caHm4zf.png' style={styles.skillLogo} /></a>
          </div>
        </div>
      </div>
    )
  }
}
