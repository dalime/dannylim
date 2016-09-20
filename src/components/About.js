import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';

export default class App extends Component {
  render() {
    return (
      <div id='about' className='container'>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className='row'>
            <h2 className='col-sm-12 col-md-12 col-lg-12 text-center'>ABOUT</h2>
          </div>
          <div className="row">
            <h5 className='col-sm-12 col-md-10 col-lg-11'>
              Hi, my name is Danny and I am a Fullstack JavaScript Developer. Born and raised in Maryland between Baltimore and Washington, D.C., I have an aptitude for service.
              I earned my Bachelor's in Information Systems and Accounting from the Robert H. Smith School of Business at the University of Maryland.
              I worked in technology risk consulting before switching to the world of development. Currently, I am building apps with JavaScript, particularly the React.js and Redux.js libraries.
              I am very fond of the MERN Stack (MongoDB, Express.js, React.js, and Node.js) for fullstack app development.
            </h5>
            <Avatar size='200px' className='col-sm-12 col-md-2 col-lg-1'/>
          </div>
        </div>
      </div>
    )
  }
}
