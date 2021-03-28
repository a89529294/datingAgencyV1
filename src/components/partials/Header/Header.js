import React, { useContext, forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';

import MyDrawer from './MyDrawer';
import { navStateContext } from '../../../contexts/navState';

import logo from '../../../assets/logo.svg';
import MyTabs from './MyTabs';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: 'white',
  },
  toolbar: {
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1236px',
    [theme.breakpoints.up('sm')]: {
      padding: '0 64px',
    },
  },
  logoContainer: {
    width: '100px',
    height: '28px',
    [theme.breakpoints.up('md')]: {
      width: '120px',
      height: '32px',
    },
  },
  homePageLink: {
    textDecoration: 'none',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  menuButton: {
    color: 'rgba(0,0,0,0.54)',
  },
}));

const Header = forwardRef((props, ref) => {
  const classes = useStyles();

  const { navState } = useContext(navStateContext);
  const { setOpenDrawer, openDrawer } = navState;

  return (
    <>
      <AppBar
        position="static"
        className={classes.appbar}
        elevation={0}
        ref={ref}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.logoContainer}>
            <Link to="/" className={classes.homePageLink}>
              <img src={logo} alt="logo" className={classes.logo} />
            </Link>
          </div>
          <Hidden mdUp>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <MyTabs />
          </Hidden>
        </Toolbar>
      </AppBar>
      <MyDrawer />
      <Divider />
    </>
  );
});

export default Header;
