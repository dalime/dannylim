import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Paper from 'material-ui/Paper';
//import { lightBlue50 } from 'material-ui/styles/colors';

import Avatar from 'material-ui/Avatar';

const styles = {
  layout: {
    'marginTop': '15%',
    'backgroundColor': 'rgba(0, 0, 0, 0.7)',
    'paddingBottom': '20px'
  },
  avatars: {
    'pointer': 'cursor'
  },
  links: {
    'textDecoration': 'none',
    'color': '#00E676'
  },
  appGif: {
    border: '1px solid black'
  }
}

export default class Projects extends Component {
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
      <div style={styles.layout} className={this.state.component}>
        <div className="container text-left">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row text-center">
              <h2>PROJECTS</h2>
            </div>
            <div className="row text-center">
              <div className="col-sm-12 col-md-4 col-lg-4" style={styles.project}>
                <div className="paper">
                  <a href='http://newsrant.herokuapp.com/' target='_blank'><img width='90%' src='http://i.imgur.com/FHtWxs1.gif' style={styles.appGif} /></a>
                  <a
                  href='https://github.com/dalime/NewsRant'
                  target='_blank'
                  className="projectLink"
                  >
                  <h3>NewsRant</h3></a>
                  <p>A simple app where you can search for news articles, open chatrooms, and talk about them anonymously with other people interested in the same article. Created with React.</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4" style={styles.project}>
                <div className="paper">
                  <a href='http://bookshare-app.herokuapp.com' target='_blank'><img width='90%' src='http://i.imgur.com/KiJgkkn.gif' style={styles.appGif} /></a>
                  <a
                  href='https://github.com/juancafe4/BookShare-App'
                  target='_blank'
                  className="projectLink"
                  >
                  <h3>BookShare</h3></a>
                  <p>Similar to eBay, BookShare is an app to store a library of books that you own, put them up for sale, and buy books from other users. Uses Google API, Sendgrid, and Amazon Web Services. Created in React-Redux.</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4" style={styles.project}>
                <div className="paper">
                  <a href='http://iconoquiz.herokuapp.com/' target='_blank'><img width='90%' src='http://i.imgur.com/kPoiQLS.gif' style={styles.appGif} /></a>
                  <a
                  href='https://github.com/humanbying/groupProject2'
                  target='_blank'
                  className="projectLink"
                  >
                  <h3>IconoQuiz</h3></a>
                  <p>A 2-player game that tests the players' knowledge of fast food restaurant logos. Each right answer earns you a point and the first player to five points wins! Challenge your friend. Created in React flux flow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
