import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles((theme) => ({
  title: {
    ...theme.homePageSectionTitleMarginBottom,
  },
}));

export default function SectionTitle({ title, body }) {
  const classes = useStyles();

  return (
    <ScrollAnimation animateIn="animate__slideInUp" animateOnce offset={50}>
      <Grid container spacing={2} className={classes.title}>
        <Grid item xs={12}>
          <Typography variant="h4" color="textPrimary" align="center">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="textSecondary" align="center">
            {body}
          </Typography>
        </Grid>
      </Grid>
    </ScrollAnimation>
  );
}
