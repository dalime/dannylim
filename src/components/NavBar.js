import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    'fontSize': 24,
    'paddingTop': 16,
    'marginBottom': 12,
    'fontWeight': 400,
  },
  slide: {
    'padding': 10,
  },
  navbar: {
    'textAlign': 'center'
  },
  nav: {
    'display': 'inlineBlock',
    'float': 'none',
    'textAlign': 'center'
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
      <nav className="navbar navbar-inverse navbar-fixed-top col-sm-12 col-md-12 col-lg-12">
        <div className="container-fluid" style={styles.bar}>
          <ul className="nav navbar-nav" onChange={this.handleChange} value={this.state.slideIndex} role="navigation" style={styles.navbar}>
            <li><a href="#about" role="tab" style={styles.nav}>ABOUT</a></li>
            <li><a href="#projects" role="tab" style={styles.nav}>PROJECTS</a></li>
            <li><a href="#blog" role="tab" style={styles.nav}>BLOG</a></li>
            <li><a href="#connect" role="tab" style={styles.nav}>CONNECT</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
