import React, { Component } from 'react';

const styles = {
  skillLogo: {
    'width': '100%',
    'marginLeft': '5px',
    'marginRight': '5px'
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
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src='http://i.imgur.com/zQahBhe.png' style={styles.skillLogo}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src='http://i.imgur.com/WBX3dw3.png' style={styles.skillLogo}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src='http://i.imgur.com/amyOVGv.png' style={styles.skillLogo}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src='http://i.imgur.com/gRThS84.png' style={styles.skillLogo}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src='http://i.imgur.com/wIVDKOZ.png' style={styles.skillLogo}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src='http://i.imgur.com/yJ8sJYj.png' style={styles.skillLogo}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src='http://i.imgur.com/8wjJ5N7.png' style={styles.skillLogo}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src='http://i.imgur.com/4o07kcH.png' style={styles.skillLogo}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src='http://i.imgur.com/xwCEZDl.png' style={styles.skillLogo}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src='http://i.imgur.com/7mp4LVQ.png' style={styles.skillLogo}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src='http://i.imgur.com/caHm4zf.png' style={styles.skillLogo}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src='http://i.imgur.com/u8TYI4J.png' style={styles.skillLogo}/>
          </div>
        </div>
      </div>
    )
  }
}
