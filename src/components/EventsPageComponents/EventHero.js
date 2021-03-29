import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SectionTitle from '../partials/SectionTitle';

import heroImage from '../../assets/eventsPage/eventsPageHeroImage.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.lightLogoRed,
    marginLeft: '-16px',
    marginRight: '-16px',
    marginBottom: '24px',
    paddingTop: '24px',
    paddingBottom: '24px',
    paddingLeft: '16px',
    paddingRight: '16px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '-64px',
      marginRight: '-64px',
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '30%',
      height: '100%',
      maxWidth: '470px',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
    },
  },
  heroContainer: {
    [theme.breakpoints.up('md')]: {
      position: 'sticky',
      top: '50%',
      transform: 'translateY(-50%)',
      padding: '16px',
    },
  },
  heroImage: {
    width: '100%',
    height: '100%',
    maxWidth: '500px',
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      height: 'auto',
      maxWidth: '100%',
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
