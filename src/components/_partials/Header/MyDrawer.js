import { useContext, useEffect } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { navStateContext } from '../../../contexts/navState';

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '10rem',
  },
  drawerItem: {
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));

const MyList = () => {
  const { navState } = useContext(navStateContext);
  const {
    inMainMenu,
    tabIndex,
    subMenuIndex,
    drawerMenu,
    setDrawerMenu,
    setInMainMenu,
    setOpenDrawer,
    routes,
  } = navState;
  const classes = useStyles();
  return (
    <List style={{ padding: 0 }}>
      {drawerMenu.map((route, index) => {
        const selected = inMainMenu
          ? index === tabIndex
          : index === subMenuIndex;
        return (
          <ListItem
            button
            key={index}
            component={route.subMenu ? 'div' : Link}
            {...(route.to && { to: route.to })}
            onClick={() => {
              if (route.subMenu) {
                setDrawerMenu(route.subMenu);
                setInMainMenu(false);
              } else {
                setOpenDrawer(false);
                setInMainMenu(true);
                setDrawerMenu(routes);
              }
            }}
            selected={selected}
            divider
          >
            <ListItemText
              className={
                selected
                  ? [classes.drawerItemSelected, classes.drawerItem].join(' ')
                  : classes.drawerItem
              }
            >
              {route.label}
            </ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};

const MyDrawer = () => {
  const { navState } = useContext(navStateContext);
  const {
    openDrawer,
    setOpenDrawer,
    setInMainMenu,
    setDrawerMenu,
    drawerMenu,
    inMainMenu,
    routes,
    subMenuIndex,
    tabIndex,
  } = navState;
  const classes = useStyles();
  useEffect(() => {
    if (openDrawer && subMenuIndex !== false) {
      setDrawerMenu(routes[tabIndex].subMenu);
      setInMainMenu(false);
    }
  }, [openDrawer]);

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      onOpen={() => setOpenDrawer(true)}
      classes={{ paper: classes.drawer }}
    >
      {!inMainMenu && (
        <ListItem
          button
          onClick={() => {
            setInMainMenu(true);
            setDrawerMenu(routes);
          }}
        >
          <ListItemText primary="返回" className={classes.drawerItem} />
          <ChevronLeftIcon style={{ opacity: 0.7 }} />
        </ListItem>
      )}
      <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}></div>
      <MyList drawerMenu={drawerMenu} inMainMenu={inMainMenu} />
    </SwipeableDrawer>
  );
};

export default MyDrawer;
