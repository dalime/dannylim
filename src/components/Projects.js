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
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="row text-center">
            <h2>PROJECTS</h2>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="row">
              <a href='http://newsrant.herokuapp.com/' target='_blank'><Avatar size='50%' src='http://i.imgur.com/ZTaZfd1.png'/></a>
            </div>
            <div className="row">
              <a
              href='https://github.com/dalime/NewsRant'
              target='_blank'
              style={styles.links}
              >
              <h3>NewsRant</h3></a>
            </div>
            <div className="row">
              <p>A simple app where you can search for news articles, open chatrooms, and talk about them anonymously with other people interested in the same article. Created with React.</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="row">
              <a href='http://iconoquiz.herokuapp.com/' target='_blank'><Avatar size='50%' src='http://i.imgur.com/Iqmd1vb.png'/></a>
            </div>
            <div className="row">
              <a
              href='https://github.com/humanbying/groupProject2'
              target='_blank'
              style={styles.links}
              >
              <h3>IconoQuiz</h3></a>
            </div>
            <div className="row">
              <p>A 2-player game that tests the players' knowledge of fast food restaurant logos. Created with React.</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="row">
              <Avatar size='50%'/>
            </div>
            <div className="row">
              <a
              href='#'
              target='_blank'
              style={styles.links}
              >
              <h3>Project 3</h3></a>
            </div>
            <div className="row">
              <p>In progress.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
