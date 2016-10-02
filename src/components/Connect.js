import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';

const styles = {
  connectBox: {
    'backgroundColor': '#e9f0ff',
    'padding': '20px'
  },
  button: {
    'margin': 12,
    'width': '10%'
  },
  linkedInButton: {
    'margin': 12,
    'width': '10%',
    'borderRadius': '20px'
  }
}

export default class Connect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      subject: '',
      message: ''
    }

    this._onInputChange = this._onInputChange.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }

  _onInputChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;
    this.setState({
      [key]: value
    });
  }

  sendMail() {
    let { email, subject, message } = this.state;
    let emailObj = {
      email, subject, message
    };

  }

  render() {
    let { email, subject, message } = this.state;
    return (
      <div className="text-center container col-sm-12 col-md-12 col-lg-12" style={styles.connectBox} id='connect'>
        <form onSubmit={this.sendMail}>
          <h2>CONNECT</h2>
          <TextField
            id="text-field-default"
            onChange={this._onInputChange}
            data-statekey="email"
            value={email}
            floatingLabelText="Email"
            />
          <TextField
            id="text-field-default"
            onChange={this._onInputChange}
            data-statekey="subject"
            value={subject}
            floatingLabelText="Subject"
            />
          <TextField
            id="text-field-default"
            onChange={this._onInputChange}
            data-statekey="message"
            value={message}
            floatingLabelText="Message"
            />
          <RaisedButton
          label="Email"
          primary={true}
          type='submit'
          />
        </form>
        <br />
        <br />
        <a href='https://github.com/dalime' target='_blank'><img src='http://i.imgur.com/4JMsggT.png' style={styles.button}/></a>
        <a href='https://twitter.com/dalime5' target='_blank'><img src='http://i.imgur.com/IpIx4wc.png' style={styles.button}/></a>
        <a href='https://dalime5.wordpress.com/' target='_blank'><img src='http://i.imgur.com/pZKbnlQ.png' style={styles.button}/></a>
        <a href='https://www.linkedin.com/in/danny-lim-a4839230' target='_blank'><img src='http://i.imgur.com/0TSfZBT.png' style={styles.button}/></a>
      </div>
    )
  }
}
