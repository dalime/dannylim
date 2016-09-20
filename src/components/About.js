import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';

export default class App extends Component {
  render() {
    return (
      <div id='about' className='container'>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className='row'>
            <h2 className='text-center'>ABOUT</h2>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3">
              <Avatar size={200}/>
            </div>
            <div className='col-sm-12 col-md-8 col-lg-9'>
              <h3>Summary</h3>
              <h5>
              Hi, my name is Danny and I am a Fullstack JavaScript Developer.
              Born and raised in Maryland between Baltimore and Washington, D.C., I have an aptitude for service.
              I earned my Bachelor's in Information Systems and Accounting from the Robert H. Smith School of Business at the University of Maryland.
              I worked in technology risk consulting, where I served clients by auditing their information systems and business processes, before switching to the world of development.
              I decided to move into app development due to my desire to create meaningful solutions.
              My consulting experience has taught me the value of open communication both internally with a team and externally with clients and has been invaluable in building with teams.
              Currently, I am building apps with JavaScript, particularly the React.js and Redux.js libraries.
              I am very fond of the MERN Stack (MongoDB, Express.js, React.js, and Node.js) for fullstack app development.
              </h5>
            </div>
          </div>
          <div className="row">
            <h3>Education</h3>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-8 col-lg-9">
              <h4>Robert H. Smith School of Business</h4>
              <h5>Bachelor of Science in Information Systems and Accounting</h5>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Avatar size={75}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-8 col-lg-9">
              <h4>Free Code Camp</h4>
              <h5>Self taught JavaScript development</h5>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Avatar size={75} />
            </div>
          </div>
          <div className="row">
            <h3>Experience</h3>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-8 col-lg-9">
              <h4>a2z, Inc.</h4>
              <h5>Software Development Intern</h5>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Avatar size={75} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-8 col-lg-9">
              <h4>Deloitte</h4>
              <h5>Advisory Consultant</h5>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <Avatar size={75} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
