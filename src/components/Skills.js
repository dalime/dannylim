import React, { Component } from 'react';

const styles = {
  layout: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
}

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: ''
    }
  }

  componentWillMount() {
    // ANIMATION ON MOUNT
    this.setState({component: 'componentIn'});
  }

  render() {
    return (
      <div className={this.state.component} style={styles.layout}>
        <div className="container text-center" style={{'marginTop': '15%'}}>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="row text-center">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h2>SKILLS</h2>
              </div>
            </div>
            <br />
            <div className="row text-center">
              <div className="col-sm-6 col-md-3 col-lg-3">
                <img className="skillLogo" src='./build/images/React.png' />
                <a className="skillLink" href="https://facebook.github.io/react/" target="_blank"><h3>React</h3></a>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <img className="skillLogo" src='./build/images/ReactNative.png' />
                <a className="skillLink" href="https://facebook.github.io/react-native/" target="_blank"><h3>React Native</h3></a>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <img className="skillLogo" src='./build/images/Redux.png' />
                <a className="skillLink" href="http://redux.js.org/" target="_blank"><h3>Redux</h3></a>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <img className="skillLogo" src='./build/images/Flux.png' />
                <a className="skillLink" href="https://facebook.github.io/flux/docs/overview.html" target="_blank"><h3>Flux</h3></a>
              </div>
            </div>
            <br />
            <div className="row text-center">
              <div className="col-sm-6 col-md-3 col-lg-3">
                <img className="skillLogo" src='./build/images/Node.png' />
                <a className="skillLink" href="https://nodejs.org/en/" target="_blank"><h3>Node.js</h3></a>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <img className="skillLogo" src='./build/images/JavaScript.png' />
                <a className="skillLink" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><h3>JavaScript</h3></a>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <img className="skillLogo" src='./build/images/HTML.png' />
                <a className="skillLink" href="http://www.w3schools.com/html/html_intro.asp" target="_blank"><h3>HTML</h3></a>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <img className="skillLogo" src='./build/images/CSS.png' />
                <a className="skillLink" href="http://www.w3schools.com/css/css_intro.asp" target="_blank"><h3>CSS</h3></a>
              </div>
            </div>
            <br />
            <div className="row text-center">
              <div className="col-sm-6 col-md-3 col-lg-3">
                <img className="skillLogo" src='./build/images/jQuery.png' />
                <a className="skillLink" href="https://jquery.com/" target="_blank"><h3>jQuery</h3></a>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <img className="skillLogo" src='./build/images/Express.png' />
                <a className="skillLink" href="https://expressjs.com/" target="_blank"><h3>Express.js</h3></a>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <img className="skillLogo" src='./build/images/Mongo.png' />
                <a className="skillLink" href="https://www.mongodb.com/" target="_blank"><h3>MongoDB</h3></a>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                <img className="skillLogo" src='./build/images/SQL.png' />
                <a className="skillLink" href="https://www.mysql.com/" target="_blank"><h3>SQL</h3></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
