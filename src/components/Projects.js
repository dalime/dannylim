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
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4" style={styles.project}>
              <a href='http://newsrant.herokuapp.com/' target='_blank'><Avatar size='50%' src='http://i.imgur.com/ZTaZfd1.png'/></a>
              <a
              href='https://github.com/dalime/NewsRant'
              target='_blank'
              style={styles.links}
              >
              <h3>NewsRant</h3></a>
              <p>A simple app where you can search for news articles, open chatrooms, and talk about them anonymously with other people interested in the same article. Created with React.</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4" style={styles.project}>
              <a href='http://bookshare-app.herokuapp.com' target='_blank'><Avatar src='http://i.imgur.com/IuaKcAr.png' size='50%'/></a>
              <a
              href='https://github.com/juancafe4/BookShare-App'
              target='_blank'
              style={styles.links}
              >
              <h3>BookFinder</h3></a>
              <p>Similar to eBay, BookFinder is an app to store a library of books that you own, put them up for sale, and buy books from other users. Uses Google API, Sendgrid, and Amazon Web Services. Created in React-Redux.</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4" style={styles.project}>
              <a href='http://iconoquiz.herokuapp.com/' target='_blank'><Avatar size='50%' src='http://i.imgur.com/Iqmd1vb.png'/></a>
              <a
              href='https://github.com/humanbying/groupProject2'
              target='_blank'
              style={styles.links}
              >
              <h3>IconoQuiz</h3></a>
              <p>A 2-player game that tests the players' knowledge of fast food restaurant logos. Created with React.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
