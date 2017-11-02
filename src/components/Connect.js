import React, { Component } from 'react';

const styles = {
  layout: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
}

export default class Connect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: ''
    }
  }

  componentWillMount() {
    // ANIMATION ON MOUNT
    this.setState({component: 'componentIn'});
  }

  render() {
    let { email, subject, message } = this.state;
    return (
      <div className={this.state.component} style={styles.layout}>
        <div className="container text-left" style={{'marginTop': '15%'}}>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="row text-center">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h2>CONNECT</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="row text-center">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <a href="./build/DannyLim_Resume.pdf" target="_blank">
                <button className="btn resumeBtn" width='100%'>
                  View Resume
                </button>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <br />
                <br />
              </div>
            </div>
            <div className="row text-center">
              <div className="col-sm-3 col-md-3 col-lg-3">
                <a href='https://github.com/dalime' target='_blank'><i className="fa fa-5x fa-github-square connectBtn" width='100%'></i></a>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <a href='https://dalime5.wordpress.com/' target='_blank'><i className="fa fa-5x fa-wordpress connectBtn" width='100%'></i></a>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <a href='https://www.linkedin.com/in/danny-lim-a4839230' target='_blank'><i className="fa fa-5x fa-linkedin-square connectBtn" width='100%'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
