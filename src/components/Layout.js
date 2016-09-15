import React, { Component } from 'react';

import NavBar from './NavBar';
import Avatar from './Avatar';
import ContactInput from './ContactInput';
import Footer from './Footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Avatar />
          <NavBar />
          <ul class='slides'>
            <li class='slide' tabindex='0'>
              <a className="section-anchor"></a>
              <a className="section-name-anchor" data-section-name='aboutMe'></a>
              ABOUT ME
              <h1 className="text-center">DANNY LIM</h1>
            </li>
            <li class='slide' tabindex='0'>
              <a className="section-anchor"></a>
              <a className="section-name-anchor" data-section-name='portfolio'></a>
              PORTFOLIO
              <ContactInput />
            </li>
            <li class='slide' tabindex='0'>
              <a className="section-anchor"></a>
              <a className="section-name-anchor" data-section-name='blog'></a>
              BLOG
            </li>
            <li class='slide' tabindex='0'>
              <Footer />
              <a className="section-anchor"></a>
              <a className="section-name-anchor" data-section-name='connect'></a>
              CONNECT
            </li>
          </ul>
        </div>
      </MuiThemeProvider>
    )
  }
}
