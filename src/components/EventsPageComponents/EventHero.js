import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SectionTitle from '../_partials/SectionTitle';

import heroImage from '../../assets/eventsPage/eventsPageHeroImage.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.lightLogoRed,
    ...theme.sectionPadding,
    [theme.breakpoints.only('xs')]: {
      height: '20rem',
    },
    [theme.breakpoints.up('sm')]: {
      height: '25rem',
    },
  },
  heroContainer: {},
  heroImage: {
    width: '100%',
    height: '35rem',

    position: 'absolute',
    [theme.breakpoints.only('xs')]: {
      objectFit: 'contain',
      left: 0,
      top: '1rem',
      maxWidth: '400px',
    },
    [theme.breakpoints.only('sm')]: {
      objectFit: 'contain',
      left: 0,
      top: '3rem',
      maxWidth: '500px',
    },
    [theme.breakpoints.up('md')]: {
      objectFit: 'contain',
      left: '2rem',
      top: '6rem',
      maxWidth: '500px',
    },
  },
}));

export default function EventHero() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.heroContainer}>
        <SectionTitle
          title="精彩活動"
          body="聽覺、味覺、視覺都帶給我不同凡響的體驗。而我對你的感覺，就是戀愛的感覺"
          titleAlign="left"
          bodyAlign="left"
          titleSize="h3"
        />
        <img src={heroImage} className={classes.heroImage} />
      </div>
    </div>
  );
}
