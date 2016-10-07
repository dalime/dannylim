import React, { Component } from 'react';
//import {Tabs, Tab} from 'material-ui/Tabs';
//import AppBar from 'material-ui/AppBar';
//import { indigoA700, grey900 } from 'material-ui/styles/colors';
  // bar: {
  //   'position': 'fixed',
  //   'top': 0,
  //   'width': '100%',
  //   'zIndex': 100
  // },
  // headline: {
  //   'fontSize': 24,
  //   'paddingTop': 16,
  //   'marginBottom': 12,
  //   'fontWeight': 400,
  // },
  // slide: {
  //   'padding': 10,
  // }

export default class NavBar extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   slideIndex: 0,
    // };

    //this.handleChange = this.handleChange.bind(this);
    this.changeComponent = this.changeComponent.bind(this);
  }

  // handleChange (value) {
  //   this.setState({
  //     slideIndex: value,
  //   });
  // };

  changeComponent(component) {
    this.props.changeComponent(component);
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand navbarLink" onClick={this.changeComponent.bind(null, 'splash')}>Danny Lim</a>
          </div>
          <div className="collapse navbar-collapse" id="collapse">
            <ul className="nav navbar-nav">
              <li onClick={this.changeComponent.bind(null, 'about')}><a className="navbarLink">About</a></li>
              <li onClick={this.changeComponent.bind(null, 'skills')}><a className="navbarLink">Skills</a></li>
              <li onClick={this.changeComponent.bind(null, 'projects')}><a className="navbarLink">Projects</a></li>
              <li onClick={this.changeComponent.bind(null, 'connect')}><a className="navbarLink">Connect</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// <Tabs
//   onChange={this.handleChange}
//   value={this.state.slideIndex}
//   role='navigation'
//   style={styles.bar}
//   className="navigationBar"
// >
//   <Tab label='ABOUT' value={0} href='#about' role='tab'/>
//   <Tab label='SKILLS' value={1} href='#skills' role='tab'/>
//   <Tab label='PROJECTS' value={2} href='#projects' role='tab'/>
//   <Tab label='BLOG' value={3} href='#blog' role='tab'/>
//   <Tab label='CONNECT' value={4} href='#connect' role='tab'/>
// </Tabs>

/*
<AppBar
  title="Title"
  iconClassNameRight="muidocs-icon-navigation-expand-more"
/>
*/
