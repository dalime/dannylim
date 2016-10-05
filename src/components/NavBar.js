import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';

const styles = {
  bar: {
    'position': 'fixed',
    'top': 0,
    'width': '100%',
    'zIndex': 100
  },
  headline: {
    'fontSize': 24,
    'paddingTop': 16,
    'marginBottom': 12,
    'fontWeight': 400,
  },
  slide: {
    'padding': 10,
  }
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
      <Tabs
        onChange={this.handleChange}
        value={this.state.slideIndex}
        role='navigation'
        style={styles.bar}
        className="navigationBar"
      >
        <Tab label='ABOUT' value={0} href='#about' role='tab'/>
        <Tab label='SKILLS' value={1} href='#skills' role='tab'/>
        <Tab label='PROJECTS' value={2} href='#projects' role='tab'/>
        <Tab label='BLOG' value={3} href='#blog' role='tab'/>
        <Tab label='CONNECT' value={4} href='#connect' role='tab'/>
      </Tabs>
    );
  }
}

/*
<AppBar
  title="Title"
  iconClassNameRight="muidocs-icon-navigation-expand-more"
/>
*/
