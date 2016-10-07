import React, { Component } from 'react';
//import Scrollspy from 'react-scrollspy';
import NavBar from './NavBar';
import Connect from './Connect';
import Splash from './Splash';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
//import Blog from './Blog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { indigoA700, grey900 } from 'material-ui/styles/colors';
//
// const muiTheme = getMuiTheme({
//   fontFamily: 'Roboto, sans-serif',
//   palette: {
//     primary1Color: indigoA700,
//     accentColor: grey900
//   },
//   appBar: {
//     textColor: indigoA700
//   }
// });

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: 'splash'
    };

    this.changeComponent = this.changeComponent.bind(this);
  }

  changeComponent(name) {
    this.setState({component: name})
  }

  render() {
    let View;
    switch (this.state.component) {
      case 'splash':
        View = <Splash />;
        break;
      case 'about':
        View = <About />;
        break;
      case 'projects':
        View = <Projects />;
        break;
      case 'skills':
        View = <Skills />;
        break;
      case 'connect':
        View = <Connect />;
        break;
    }

    return (
      <MuiThemeProvider>
        <div>
          <NavBar changeComponent={this.changeComponent}/>
          {View}
        </div>
      </MuiThemeProvider>
    )
  }
}
