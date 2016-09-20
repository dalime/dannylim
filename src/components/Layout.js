import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import NavBar from './NavBar';
import ContactInput from './ContactInput';
import Footer from './Footer';
import Jumbotron from './Jumbotron';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  height: {
    'height': '60px'
  }
}

export default class Layout extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Jumbotron />
          <div className="scroll-box">

            {/* <ul className="nav nav-tabs tabs-3 red horizontal-spy" id="navbar-example2" role="navigation">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#section1" role="tab">section1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#section2" role="tab">section2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#section3" role="tab">section3</a>
              </li>
            </ul> */}

            <div style={styles.height}></div>

            <h4>Scroll down to see the effect</h4>
            <hr/>

            <div className="scrollspy-example z-depth-1" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
              <h4 id="aboutMe">section1</h4>
                <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo
                  booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus,
                  cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
                <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo
                  booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus,
                  cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
              <h4 id="portfolio">section2</h4>
                <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck,
                  mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
                <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo
                  booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus,
                  cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
              <h4 id="blog">section3</h4>
                <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo
                  park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
                <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo
                  booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus,
                  cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
            </div>

          </div>
          <ContactInput />
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}
