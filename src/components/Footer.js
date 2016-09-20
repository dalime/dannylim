import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
//import ActionTwitter from 'material-ui/svg-icons/action/twitter';
import {fullWhite} from 'material-ui/styles/colors';

const style = {
  margin: 12,
};

const Footer = () => (
  <div id='connect' className='text-center'>
    <FlatButton
      icon={<ActionAndroid />}
      style={style}
    />
    <FlatButton
      href="https://github.com/dalime"
      target="_blank"
      secondary={true}
      icon={<ActionAndroid />}
      style={style}
    />
    <FlatButton
      backgroundColor="#a4c639"
      hoverColor="#8AA62F"
      icon={<FontIcon className="muidocs-icon-android" />}
      style={style}
    />
  </div>
);

export default Footer;
