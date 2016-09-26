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
  render() {
    return (
      <div className="text-center container col-sm-12 col-md-12 col-lg-12" style={styles.connectBox} id='connect'>
        <form method='post' action='mailto:danny.b.lim@gmail.com'>
          <h2>CONNECT</h2>
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
