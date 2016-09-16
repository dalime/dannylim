import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';

const style = {
  margin: 12,
};

const FlatButtonExampleIcon = () => (
  <div id='connect'>
    <FlatButton
      icon={<ActionAndroid />}
      style={style}
    />
    <FlatButton
      href="https://github.com/dalime"
      target="_blank"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-github" />}
      style={style}
    />
    <FlatButton
      backgroundColor="#a4c639"
      hoverColor="#8AA62F"
      icon={<FontIcon className="muidocs-icon-twitter" />}
      style={style}
    />
  </div>
);

export default FlatButtonExampleIcon;
