import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  heroTextContainer: {
    ...theme.sectionPadding,
    [theme.breakpoints.only('xs')]: {
      padding: '24px 16px',
    },
    [theme.breakpoints.only('sm')]: {
      padding: '24px 64px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '96px 64px',
    },
  },
  typedText: {
    color: theme.palette.common.darkLogoRed,
  },
}));

const HeroText = () => {
  const classes = useStyles();
  const typedTextArray = [
    ['多', '金'],
    ['高', '學', '歷'],
  ];
  const [typedTextState, setTypedTextState] = [];

  return (
    <Grid item xs={12} md={6} className={classes.heroTextContainer}>
      <Grid container spacing={2} style={{ marginBottom: 0 }}>
        <Grid item xs={12}>
          <Typography variant="h2" color="textPrimary">
            我心目中得理想情人擁有 <br />
            <span className={classes.typedText}></span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant=""></Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const HeroImage = () => {
  return <Grid item xs={12} md={6}></Grid>;
};

export default function Hero() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <HeroText />
      <HeroImage />
    </Grid>
  );
}
