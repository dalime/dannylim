import React, { Component } from 'react';

export default class NavBar extends Component {

  constructor(props) {
    super(props);

    this.changeComponent = this.changeComponent.bind(this);
  }

  changeComponent(component) {
    // WHEN TAB CLICKED BROWSER HISTORY PUSHES TO CLICKED
    this.props.changeComponent(component);

    // TO COLLAPSE NAVBAR AFTER CLICK
    let collapse = document.getElementById('collapse');
    if (collapse.classList.contains('in')) {
      collapse.classList.remove('in');
    }
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
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand navbarLink" onClick={this.changeComponent.bind(null, '')}>Danny Lim</a>
          </div>
          <div className="collapse navbar-collapse" id="collapse">
            <ul className="nav navbar-nav">
              <li onClick={this.changeComponent.bind(null, 'about')}><a className="navbarLink">About</a></li>
              <li onClick={this.changeComponent.bind(null, 'skills')}><a className="navbarLink">Skills</a></li>
              <li onClick={this.changeComponent.bind(null, 'projects')}><a className="navbarLink">Projects</a></li>
              <li onClick={this.changeComponent.bind(null, 'blog')}><a className="navbarLink">Blog</a></li>
              <li onClick={this.changeComponent.bind(null, 'connect')}><a className="navbarLink">Connect</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
