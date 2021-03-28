import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles((theme) => ({
  heroText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  sectionPadding: {
    ...theme.homePageSection,
  },
  logoText: {
    ...theme.typography.logoText,
  },
  fontWhite: {
    color: 'white',
  },
}));

export default function ImageCenterText({ title, body, showLogo = false }) {
  const classes = useStyles();
  return (
    <div className={`${classes.heroText} ${classes.sectionPadding}`}>
      <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.fontWhite}>
              {title}
              {showLogo && (
                <span className={classes.logoText}>
                  <span style={{ fontSize: '1rem' }}>17</span>Marry
                </span>
              )}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.fontWhite}>
              {body}
            </Typography>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </div>
  );
}
