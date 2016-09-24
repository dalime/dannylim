import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';

const styles = {
  companyTitle: {
    'fontWeight': 'bold'
  },
  positionName: {
    'fontStyle': 'italic'
  },
  skillLogo: {
    'width': '150px',
    'margin': '5px'
  }
}

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
              <Avatar size={250} src='http://i.imgur.com/azhJy0m.jpg?1'/>
            </div>
            <div className='col-sm-12 col-md-8 col-lg-9'>
              <p>
              Born and raised in Maryland between Baltimore and Washington, D.C., I have a strong affinity for professionalism in my work.
              My background is in technology risk consulting, where I audited the information systems of my clients, prior to my transition to development.
              I decided to move into app development in order to create meaningful solutions.
              Currently, I am building apps with JavaScript, particularly with the MERN Stack (MongoDB, Express.js, React.js, and Node.js).
              Below are some of the skills in my arsenal to build with.
              </p>
              <img src='http://i.imgur.com/zQahBhe.png' style={styles.skillLogo}/>
              <img src='http://i.imgur.com/WBX3dw3.png' style={styles.skillLogo}/>
              <img src='http://i.imgur.com/gRThS84.png' style={styles.skillLogo}/>
              <img src='http://i.imgur.com/wIVDKOZ.png' style={styles.skillLogo}/>
              <img src='http://i.imgur.com/yJ8sJYj.png' style={styles.skillLogo}/>
              <img src='http://i.imgur.com/8wjJ5N7.png' style={styles.skillLogo}/>
              <img src='http://i.imgur.com/4o07kcH.png' style={styles.skillLogo}/>
              <img src='http://i.imgur.com/xwCEZDl.png' style={styles.skillLogo}/>
              <img src='http://i.imgur.com/7mp4LVQ.png' style={styles.skillLogo}/>
              <img src='http://i.imgur.com/caHm4zf.png' style={styles.skillLogo}/>
            </div>
          </div>
          <div className="row text-center">
            <h3>EXPERIENCE</h3>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 text-right">
              <Avatar size={75} src='http://i.imgur.com/SprmAln.png?1' />
            </div>
            <div className="col-sm-6 col-md-8 col-lg-9">
              <h4 style={styles.companyTitle}>a2z, Inc.</h4>
              <h5 style={styles.positionName}>Software Development Intern (September 2015 - May 2016)</h5>
              <p>a2z offers robust software solutions for trade show management.
              As an intern on their tech team, I had the pleasure of being a part of the day-to-day development of said software solutions.
              I helped customize new client sites, developed new in-house apps for PMs, and resolved some errors in their base product.
              a2z was definitely a fantastic team to expose me to working in development.
              </p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 text-right">
              <Avatar size={75} src='http://i.imgur.com/EIXEBVR.jpg?1' />
            </div>
            <div className="col-sm-6 col-md-8 col-lg-9">
              <h4 style={styles.companyTitle}>Deloitte</h4>
              <h5 style={styles.positionName}>Advisory Consultant (September 2014 - September 2015)</h5>
              <p>Deloitte Advisory offers enterprise risk solutions to clients nationwide.
              The pairing of my two majors led straight to this position, particularly in Technology Risk.
              Using my systems background, I served clients by auditing their information systems and business processes.
              </p>
            </div>
          </div>
          <div className="row text-center">
            <h3>EDUCATION</h3>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 text-right">
              <Avatar size={75} src='http://i.imgur.com/1GAgpjG.png'/>
            </div>
            <div className="col-sm-6 col-md-8 col-lg-9">
              <h4 style={styles.companyTitle}>Free Code Camp</h4>
              <h5 style={styles.positionName}>Fullstack JavaScript Development (May 2016 - Current)</h5>
              <p>After my internship with a2z, I decided to dedicate more time to better my development skillset.
              I found Free Code Camp, which was the perfect solution for me.
              Since then, JavaScript has been my choice language and I've been developing particularly with React.js and Redux.js.</p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 text-right">
              <Avatar size={75} src='http://i.imgur.com/ErkLYCZ.png'/>
            </div>
            <div className="col-sm-6 col-md-8 col-lg-9">
              <h4 style={styles.companyTitle}>Robert H. Smith School of Business</h4>
              <h5 style={styles.positionName}>Bachelor of Science in Information Systems and Accounting (August 2010 - May 2014)</h5>
              <p>From 2010 to 2014, I spent the first defining years of adulthood at UMD.
              Always having an interest in business, I was a direct admit to the Robert H. Smith School of Business as a freshman.
              Interested in how companies manage data, I chose Information Systems as my primary major within the school.
              It was then that I was first exposed to programming, particularly in Visual Basic and SQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
