import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles((theme) => ({
  title: {
    ...theme.sectionTitleMarginBottom,
  },
}));

export default function SectionTitle({
  title,
  body,
  titleAlign = 'center',
  bodyAlign = 'center',
  titleSize = 'h4',
  bodySize = 'h6',
}) {
  const classes = useStyles();

  return (
    <ScrollAnimation animateIn="animate__slideInUp" animateOnce offset={50}>
      <Grid container spacing={2} className={classes.title}>
        <Grid item xs={12}>
          <Typography
            variant={titleSize}
            color="textPrimary"
            align={titleAlign}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={bodySize}
            color="textSecondary"
            align={bodyAlign}
          >
            {body}
          </Typography>
        </Grid>
      </Grid>
    </ScrollAnimation>
  );
}
