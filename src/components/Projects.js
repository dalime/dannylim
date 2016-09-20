import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Avatar from 'material-ui/Avatar';

const path = 'http://github.com/dalime/'

const styles = {
  avatars: {
    'pointer': 'cursor'
  },
  links: {
    'textDecoration': 'none',
    'color': 'black'
  }
}

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repo: ''
    }

    this.toGithub = this.toGithub.bind(this);
    this.navigate = this.navigate.bind(this);
    this.herokuNav = this.herokuNav.bind(this);
  }

  toGithub(e) {
    this.setState({repo: e.target.innerHTML})
    this.navigate(this.state.repo);
  }

  navigate(repo) {
    //browserHistory.push(`http://github.com/dalime/${repo}`)
    // OPEN NEW TAB TO REPO
  }

  herokuNav(e) {
    // OPEN NEW TAB TO HEROKU DEPLOYED APP
  }

  render() {
    return (
      <div id="projects" className="text-center container">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="row">
            <h2>PROJECTS</h2>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Avatar size={100} onClick={this.herokuNav} />
              <a
                href='#'
                target='_blank'
                onClick={this.toGithub}
                style={styles.links}
              >
              <h3>Project 1</h3></a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Avatar size={100} onClick={this.herokuNav} />
              <a
                href='#'
                target='_blank'
                onClick={this.toGithub}
                style={styles.links}
              >
              <h3>NewsRant</h3></a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Avatar size={100} onClick={this.herokuNav} />
              <a
                href='#'
                target='_blank'
                onClick={this.toGithub}
                style={styles.links}
              >
              <h3>Project 3</h3></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
