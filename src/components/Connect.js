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
    margin: 12
  }
}

export default class Connect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageText: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onInputChange(e) {
    this.setState({messageText: e.target.value});
  }

  submit(e) {
    // ADD LOGIC TO SEND EMAIL TO ME
    e.preventDefault();
  }

  render() {
    return (
      <div className="text-center container" style={styles.connectBox} id='connect'>
        <form onSubmit={this.submit}>
          <h2>CONNECT</h2>
          <TextField
          hintText="Feel free to message me."
          floatingLabelText="Message"
          onChange={this.onInputChange}
          /><br />
          <RaisedButton
          label="Send"
          secondary={true}
          type='submit'
          />
        </form>
        <br />
        <br />
        <img src='http://i.imgur.com/8ufDCb0.png' width='100px'/>
        <FlatButton
          icon={<ActionAndroid />}
          style={styles.button}
        />
        <FlatButton
          href="https://github.com/dalime"
          target="_blank"
          secondary={true}
          icon={<ActionAndroid />}
          style={styles.button}
        />
        <FlatButton
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          icon={<FontIcon className="muidocs-icon-android" />}
          style={styles.button}
        />
      </div>
    )
  }
}
