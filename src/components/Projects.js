import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Paper from 'material-ui/Paper';
import { lightBlue50 } from 'material-ui/styles/colors';

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
    'backgroundColor': lightBlue50,
    'padding': '10px'
  },
  paper: {
    width: '100%',
    margin: '5px',
    textAlign: 'center'
  }
}

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" style={styles.background}>
        <div className="container text-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="row text-center">
              <h2>PROJECTS</h2>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4" style={styles.project}>
                <Paper style={styles.paper} zDepth={4}>
                  <a href='http://newsrant.herokuapp.com/' target='_blank'><Avatar size='50%' src='http://i.imgur.com/ZTaZfd1.png'/></a>
                  <a
                  href='https://github.com/dalime/NewsRant'
                  target='_blank'
                  style={styles.links}
                  >
                  <h3>NewsRant</h3></a>
                  <p>A simple app where you can search for news articles, open chatrooms, and talk about them anonymously with other people interested in the same article. Created with React.</p>
                </Paper>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4" style={styles.project}>
                <Paper style={styles.paper} zDepth={4}>
                  <a href='http://bookshare-app.herokuapp.com' target='_blank'><Avatar src='http://i.imgur.com/IuaKcAr.png' size='50%'/></a>
                  <a
                  href='https://github.com/juancafe4/BookShare-App'
                  target='_blank'
                  style={styles.links}
                  >
                  <h3>BookShare</h3></a>
                  <p>Similar to eBay, BookShare is an app to store a library of books that you own, put them up for sale, and buy books from other users. Uses Google API, Sendgrid, and Amazon Web Services. Created in React-Redux.</p>
                </Paper>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4" style={styles.project}>
                <Paper style={styles.paper} zDepth={4}>
                  <a href='http://iconoquiz.herokuapp.com/' target='_blank'><Avatar size='50%' src='http://i.imgur.com/Iqmd1vb.png'/></a>
                  <a
                  href='https://github.com/humanbying/groupProject2'
                  target='_blank'
                  style={styles.links}
                  >
                  <h3>IconoQuiz</h3></a>
                  <p>A 2-player game that tests the players' knowledge of fast food restaurant logos. Each right answer earns you a point and the first player to five points wins! Challenge your friend. Created in React flux flow.</p>
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
