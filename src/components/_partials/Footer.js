import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden, Link, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import { navStateContext } from '../../contexts/navState';

import logo from '../../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.sectionPadding,
  },
  logo: {
    width: '100%',
    height: 'auto',
  },
  iconContainer: {
    marginLeft: '1rem',
  },
  resetLinkStyle: {
    textDecoration: 'none',
    textTransform: 'none',
    color: 'inherit',
  },
}));

export default function Footer({ headerElement }) {
  const classes = useStyles();
  const context = useContext(navStateContext);
  const { navState } = context;
  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid
          container
          item
          xs={12}
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={3}>
            <RouterLink to="/">
              <img src={logo} alt="logo" className={classes.logo} />
            </RouterLink>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={9} md={6} container spacing={2}>
              {navState.routes.map((route, i) => (
                <Grid item xs={4} key={i}>
                  <Typography variant="h6" align="right">
                    <RouterLink
                      to={route.to}
                      className={classes.resetLinkStyle}
                    >
                      {route.label}
                    </RouterLink>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Link
              onClick={() =>
                headerElement.scrollIntoView({ behavior: 'smooth' })
              }
              color="primary"
            >
              回最上面
            </Link>
          </Hidden>
        </Grid>

        <Grid
          container
          className={classes.socialContainer}
          justify="flex-end"
          item
          xs={12}
        >
          <Grid
            item
            component="a"
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.iconContainer}
          >
            <FacebookIcon />
          </Grid>
          <Grid
            item
            component="a"
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.iconContainer}
          >
            <TwitterIcon />
          </Grid>
          <Grid
            item
            component="a"
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.iconContainer}
          >
            <InstagramIcon />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
