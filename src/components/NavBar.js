import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (value) {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          role='navigation'
        >
          <Tab label='ABOUT' value={0} href='#about' role='tab'/>
          <Tab label='PORTFOLIO' value={1} href='#portfolio' role='tab'/>
          <Tab label='BLOG' value={2} href='#blog' role='tab'/>
          <Tab label='CONNECT' value={3} href='#connect' role='tab'/>
        </Tabs>
      </div>
    );
  }
}
