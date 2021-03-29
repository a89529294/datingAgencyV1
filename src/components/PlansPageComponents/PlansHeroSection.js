import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid, useTheme, useMediaQuery, Typography } from '@material-ui/core';

import heroImage from '../../assets/plans/plansHeroImage.jpg';

const useStyles = makeStyles((theme) => ({
  sectionPadding: {
    ...theme.sectionPadding,
  },
  root: {
    paddingTop: 24,
    paddingBottom: 24,
    [theme.breakpoints.up('md')]: {
      paddingBottom: 40,
      paddingTop: 40,
    },
  },
  heroImage: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
  },
  labelContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function PlansHeroSection({ title }) {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div className={`${classes.sectionPadding} ${classes.root}`}>
      <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
        <Grid container justify="space-between" spacing={mdUp ? 4 : 2}>
          <Grid item container xs={12} md={6} alignItems="center">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h3" color="textPrimary" align="center">
                  各種優惠的
                  <Typography
                    variant="h3"
                    component="span"
                    style={{ color: theme.palette.common.darkLogoRed }}
                  >
                    最新方案
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" align="center" color="textPrimary">
                  $399輕資費享用中華電信高品質網路流量18GB，小資族就能吃很飽，小鳥胃輕鬆省！終身不綁約，免預繳，線上申辦超快速
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container justify="center" xs={12} md={6}>
            <img src={heroImage} className={classes.heroImage} />
          </Grid>
        </Grid>
      </ScrollAnimation>
    </div>
  );
}
