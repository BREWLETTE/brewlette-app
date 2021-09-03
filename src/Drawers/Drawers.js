import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import { Tooltip } from '@material-ui/core';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function Drawers(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >,
      <List>
        {[
        {
          name: 'My Profile',
          utility: props['goProfile']
        },
        {
            name: 'Brewlette',
            utility: props['goRoulette']
          },
        {
          name: 'Log Out',
          utility: props['logOut']
        },
        ].map((text, index) => (
          <ListItem onClick={text.utility} button key={text.name} style={{marginTop: '25px'}}>
            <ListItemIcon>
            {(() => {
              if ( index === 0) {
                  return <AccountCircleIcon/>
              }   else if ( index === 1) {
                    return <LocalDrinkIcon/>
              } else if ( index === 2) {
                return <ExitToAppIcon/>
          } 
                }) ()}
            </ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
            <Tooltip title="Menu">
                <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
            </Tooltip>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Drawers;

