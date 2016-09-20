import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  connectBox: {
    'backgroundColor': 'lightgray',
    'padding': '20px'
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
      <div className="text-center container" style={styles.connectBox}>
        <form onSubmit={this.submit}>
          <h4>CONNECT</h4>
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
      </div>
    )
  }
}
