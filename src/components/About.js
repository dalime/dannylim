import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';

const styles = {
  layout: {
    'backgroundColor': 'rgba(0, 0, 0, 0.7)'
  },
  companyTitle: {
    'fontWeight': 'bold'
  },
  positionName: {
    'fontStyle': 'italic'
  }
}

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: ''
    }
  }

  componentWillMount() {
    this.setState({component: 'componentIn'});
  }

  render() {
    return (
      <div className={this.state.component} style={{marginTop: '15%'}}>
        <div className='container text-left' style={styles.layout}>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
            <div className='row text-center'>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h2>ABOUT</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-3 text-center">
                <a href='http://i.imgur.com/azhJy0m.jpg?1' target='_blank'><Avatar className="avatar" size='80%' src='http://i.imgur.com/azhJy0m.jpg?1'/></a>
              </div>
              <div className='col-sm-12 col-md-8 col-lg-9'>
                <p>
                  Born and raised in Maryland between Baltimore and Washington, D.C., I have a strong affinity for professionalism in my work.
                  My background is in technology risk consulting, where I audited the information systems of my clients, prior to my transition to development.
                  I decided to move into app development due to my interest in technology and creating software from scratch.
                  Currently, I am building apps with JavaScript, particularly with the MERN Stack (MongoDB, Express.js, React.js, and Node.js).
                </p>
                <p>
                  In my free time, I love to travel and have gone on three backpacking trips to Southeast Asia, Central Europe, and India.
                  I also like to stay active. My hobbies include weight lifting, Brazilian jiu-jitsu, and breakdancing.
                  I believe that staying active physically helps clear the mind and keeps the brain functioning clearly.
                  Photography and videography are fascinating outlets as well, and I edit videos on the side.
                </p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h3>EXPERIENCE</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-3 text-center">
                <a href='http://www.a2zinc.net/show6/public/enter.aspx' target='_blank'><Avatar className="avatar" size='30%' src='http://i.imgur.com/SprmAln.png?1' /></a>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-9">
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
              <div className="col-sm-12 col-md-4 col-lg-3 text-center">
                <a href='http://www2.deloitte.com/us/en.html' target='_blank'><Avatar className="avatar" size='30%' src='http://i.imgur.com/Fn7p3Gp.jpg' /></a>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-9">
                <h4 style={styles.companyTitle}>Deloitte</h4>
                <h5 style={styles.positionName}>Advisory Consultant (September 2014 - September 2015)</h5>
                <p>Deloitte Advisory offers enterprise risk solutions to clients nationwide.
                The pairing of my two majors led straight to this position, particularly in Technology Risk.
                Using my systems background, I served clients by auditing their information systems and business processes.
                </p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h3>EDUCATION</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-3 text-center">
                <a href='http://freecodecamp.com' target='_blank'><Avatar className="avatar" size='30%' src='http://i.imgur.com/1GAgpjG.png'/></a>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-9">
                <h4 style={styles.companyTitle}>Free Code Camp</h4>
                <h5 style={styles.positionName}>Fullstack JavaScript Development (May 2016 - Current)</h5>
                <p>After my internship with a2z, I decided to dedicate more time to better my development skillset.
                I found Free Code Camp, which was the perfect solution for me.
                Since then, JavaScript has been my choice language and I've been developing particularly with React.js and Redux.js.</p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-3 text-center">
                <a href='http://www.rhsmith.umd.edu/' target='_blank'><Avatar className="avatar" size='30%' src='http://i.imgur.com/ErkLYCZ.png'/></a>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-9">
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
      </div>
    )
  }
}
