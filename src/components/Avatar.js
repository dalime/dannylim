import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {
blue300,
indigo900,
orange200,
deepOrange300,
pink400,
purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};

const AvatarExampleSimple = () => (
  <List>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar src="images/uxceo-128.jpg" />
      }
    >
      Image Avatar
    </ListItem>
  </List>
);

export default AvatarExampleSimple;
