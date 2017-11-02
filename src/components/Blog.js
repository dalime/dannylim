import React, { Component } from 'react';

export default class Blog extends Component {
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
    return (
      <div className={this.state.component} style={styles.layout}>
        <div className="container text-left" style={{'marginTop': '15%'}}>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="row text-center">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h2>BLOG</h2>
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
              <iframe src="http://dalime5.wordpress.com/"></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
