import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Avatar from 'material-ui/Avatar';

const styles = {
  avatars: {
    'pointer': 'cursor'
  },
  links: {
    'textDecoration': 'none',
    'color': 'black'
  },
  background: {
    'backgroundColor': '#e9f0ff'
  }
}

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="container text-center" style={styles.background}>
        <div className="col-sm-12 col-md-12 col-lg-12 text-center">
          <div className="row">
            <h2>PROJECTS</h2>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <a href='http://newsrant.herokuapp.com/' target='_blank'><Avatar size={100} src='http://i.imgur.com/72ivRyL.png'/></a>
              <a
              href='https://github.com/dalime/NewsRant'
              target='_blank'
              style={styles.links}
              >
              <h3>NewsRant</h3></a>
              <p>A simple app where you can search for news articles, open chatrooms, and talk about them anonymously with other people interested in the same article.</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Avatar size={100}/>
              <a
                href='#'
                target='_blank'
                style={styles.links}
              >
              <h3>Project 2</h3></a>
              <p>Coming soon</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Avatar size={100}/>
              <a
                href='#'
                target='_blank'
                style={styles.links}
              >
              <h3>Project 3</h3></a>
              <p>Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
