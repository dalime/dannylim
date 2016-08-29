import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to='/'>DANNY LIM</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <p className="navbar-text">FULLSTACK JAVASCRIPT DEVELOPER</p>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='/'>PORTFOLIO</Link></li>
              <li><Link to='/'>RESUME</Link></li>
              <li><Link to='/about'>BLOG</Link></li>
              <li><Link to='/contact'>CONTACT</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
