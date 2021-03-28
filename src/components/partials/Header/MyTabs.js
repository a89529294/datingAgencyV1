import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

import { navStateContext } from '../../../contexts/navState';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  tabRoot: {
    fontSize: '1.2rem',
    minWidth: '60px',
    padding: '0.5rem 1rem',
    color: theme.palette.common.black,
    fontFamily: 'Hanyi',
  },
  menuTab: {
    fontSize: '1.2rem',
    minWidth: '60px',
    color: theme.palette.common.black,
    fontFamily: 'Hanyi',
  },
  menuLink: {
    textDecoration: 'none',
    textTransform: 'none',
    color: theme.palette.common.black,
  },
  selectedTab: {
    backgroundColor: theme.palette.common.selectedBg,
    '&:hover': { backgroundColor: theme.palette.common.selectedBg },
  },
}));

const MyTabButton = ({ label, onClick, component, to, index, tabIndex }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.tabRoot}
      onClick={onClick}
      component={component}
      to={to}
      classes={{ root: index === tabIndex ? classes.selectedTab : '' }}
    >
      {label}
    </Button>
  );
};

export default function MyTabs() {
  const { navState } = useContext(navStateContext);
  const { routes, signupSigninMenuOptions, tabIndex, subMenuIndex } = navState;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      {routes.map((route, i) => {
        return route.subMenu ? (
          <MyTabButton
            label={route.label}
            key={i}
            onClick={handleClick}
            index={i}
            tabIndex={tabIndex}
          />
        ) : (
          <MyTabButton
            label={route.label}
            key={i}
            component={Link}
            to={route.to}
            index={i}
            tabIndex={tabIndex}
          />
        );
      })}
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 59,
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {signupSigninMenuOptions.map((option, i) => (
          <MenuItem
            onClick={handleClose}
            key={i}
            className={
              i === subMenuIndex
                ? `${classes.menuTab} ${classes.selectedTab}`
                : classes.menuTab
            }
          >
            <Link to={option.to} className={classes.menuLink}>
              {option.label}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
