import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';

import { eventArray } from '../../db';
import Label from '../_partials/Label';
import useStateWithLabel from '../../hooks/useStateWithLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.sectionPadding,
    paddingTop: '9rem',
    ['@media (max-width: 400px)']: {
      paddingTop: '8rem',
    },
    ['@media (max-width: 350px)']: {
      paddingTop: '7rem',
    },
    [theme.breakpoints.only('sm')]: {
      paddingTop: '9rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '12rem',
    },
  },
  eventCard: {
    ...theme.cardHoverEffect,
    height: '100%',
    display: 'flex',
    borderRadius: '8px',
    flexDirection: 'column',
  },
  cardMedia: {
    height: '300px',
    position: 'relative',
  },
  cardImg: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '0px 0px 160px 0px',
  },
  cardContentContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:last-child': {
      paddingBottom: '16px',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '24px',
      paddingRight: '24px',
    },
  },
  cardContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMetaInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loadMoreBtn: {
    minWidth: '100%',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '420px',
      minWidth: '420px',
    },
  },
}));

const Event = ({ img, title, body, tagColor, tagLabel, date }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOnce
        offset={50}
        style={{ height: '100%', width: '100%' }}
      >
        <Card className={classes.eventCard}>
          <CardMedia className={classes.cardMedia} component="div">
            <LazyLoad
              height={300}
              offset={100}
              style={{ height: '100%', width: '100%' }}
            >
              <img src={img} className={classes.cardImg} />
            </LazyLoad>
          </CardMedia>
          <CardContent className={classes.cardContentContainer}>
            <div className={classes.cardContent}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {body}
              </Typography>
              <div style={{ flexGrow: 1 }}></div>
              <Divider style={{ margin: '16px 0px' }} />
              <div className={classes.cardMetaInfo}>
                <Label tagColor={tagColor} tagLabel={tagLabel} />
                <Typography variant="overline" color="textSecondary">
                  {date}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollAnimation>
    </Grid>
  );
};

export default function EventDisplay() {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [eventsPerRow, setEventsPerRow] = useStateWithLabel(2, 'eventsPerRow');
  const [numberOfEvents, setNumberOfEvents] = useStateWithLabel(
    eventsPerRow,
    'numberOfEvents'
  );
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useStateWithLabel(
    true,
    'showLoadMoreBtn'
  );

  useEffect(() => {
    setEventsPerRow(mdUp ? 3 : 2);
    if (mdUp && 3 > numberOfEvents) {
      setNumberOfEvents(3);
    }
  }, [mdUp]);

  const handleLoadMore = () => {
    setNumberOfEvents((number) => setNumberOfEvents((number += eventsPerRow)));
    if (numberOfEvents + eventsPerRow >= eventArray.length)
      setShowLoadMoreBtn(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {eventArray.map(
          (event, i) =>
            i < numberOfEvents && (
              <Event
                key={i}
                img={event.img}
                title={event.eventName}
                body={event.body}
                tagColor={event.tagColor}
                tagLabel={event.tagLabel}
                date={event.date}
              />
            )
        )}
        {showLoadMoreBtn && (
          <Grid container item xs={12} justify="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.loadMoreBtn}
              onClick={handleLoadMore}
            >
              查看更多
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
