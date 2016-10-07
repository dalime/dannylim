import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';
// import FontIcon from 'material-ui/FontIcon';
// import ActionAndroid from 'material-ui/svg-icons/action/android';
// import {fullWhite} from 'material-ui/styles/colors';
// import { greenA700, blueA400 } from 'material-ui/styles/colors';

const styles = {
  layout: {
    'backgroundColor': 'rgba(0, 0, 0, 0.7)'
  }
}

export default class Connect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      subject: '',
      message: '',
      component: ''
    }

    this._onInputChange = this._onInputChange.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }

  componentWillMount() {
    this.setState({component: 'componentIn'});
  }

  _onInputChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;
    this.setState({
      [key]: value
    });
  }

  sendMail(e) {
    e.preventDefault();
    let { email, subject, message } = this.state;
    let emailObj = {
      email, subject, message
    };
    UserActions.sendEmail(emailObj);
  }

  render() {
    let { email, subject, message } = this.state;
    return (
      <div className={this.state.component} style={styles.layout}>
        <div className="container text-left" style={{'marginTop': '5%'}}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row text-center">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h2>CONNECT</h2>
              </div>
            </div>
            <div className="row">
              <br />
              <br />
              <br />
            </div>
            <div className="row text-center">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <a href="./build/DannyLim_Resume.pdf" target="_blank">
                <button className="btn resumeBtn">
                  View Resume
                </button>
                </a>
              </div>
            </div>
            <div className="row">
              <br />
              <br />
            </div>
            <div className="row text-center">
              <div className="col-xs-6 col-sm-6 col-md-3 -col-lg-3">
                <a href='https://github.com/dalime' target='_blank'><i className="fa fa-5x fa-github-square connectBtn"></i></a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-3 -col-lg-3">
                <a href='https://twitter.com/dalime5' target='_blank'><i className="fa fa-5x fa-twitter-square connectBtn"></i></a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-3 -col-lg-3">
                <a href='https://dalime5.wordpress.com/' target='_blank'><i className="fa fa-5x fa-wordpress connectBtn"></i></a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-3 -col-lg-3">
                <a href='https://www.linkedin.com/in/danny-lim-a4839230' target='_blank'><i className="fa fa-5x fa-linkedin-square connectBtn"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
