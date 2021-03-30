import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';

import LinkButton from '../_partials/LinkButton';

import { eventArray } from '../../db';
import Label from '../_partials/Label';

const useStyles = makeStyles((theme) => ({
  section: {
    ...theme.sectionPadding,
  },
  titleMarginBottom: {
    ...theme.sectionTitleMarginBottom,
  },
  eventCard: {
    width: '100%',
    ...theme.cardHoverEffect,
  },
  cardContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '32px 16px',
    [theme.breakpoints.up('md')]: {
      padding: '48px 24px',
    },
  },

  dot: {
    margin: '0px 8px',
    width: '4px',
    height: '4px',
    display: 'inline-block',
    background: '#2d3748',
    borderRadius: '100%',
    padding: 0,
  },
}));

const EventCard = ({
  tagColor,
  tagLabel,
  eventName,
  location,
  date,
  index,
  mdUp,
}) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      xs={12}
      sm={6}
      md={4}
      alignItems="center"
      direction="column"
    >
      <ScrollAnimation
        animateIn={
          mdUp
            ? 'animate__slideInUp'
            : index % 2
            ? 'animate__slideInRight'
            : 'animate__slideInLeft'
        }
        animateOnce
        style={{ width: '100%' }}
      >
        <Card variant="outlined" className={classes.eventCard}>
          <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
              <Grid item container xs={12} alignItems="center">
                <Label tagColor={tagColor} tagLabel={tagLabel} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">{eventName}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item container xs={12} alignItems="center">
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="span"
                >
                  {location}
                </Typography>
                <span className={classes.dot} />
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="span"
                  style={{ fontFamily: 'Lato' }}
                >
                  {date}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ScrollAnimation>
    </Grid>
  );
};

export default function Events() {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div className={classes.section}>
      <div>
        <Grid container spacing={2} className={classes.titleMarginBottom}>
          <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
            <Grid item xs={12}>
              <Typography variant="h4" color="textPrimary">
                近期活動
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textSecondary">
                全省各地平價優質有趣台北桃園新竹台中嘉義台南高雄屏東宜蘭彰化苗栗單身聯誼活動
              </Typography>
              <LinkButton label="查看所有活動" />
            </Grid>
          </ScrollAnimation>

          <Grid container spacing={mdUp ? 4 : 2}>
            {eventArray.map((event, i) => (
              <EventCard
                tagColor={event.tagColor}
                tagLabel={event.tagLabel}
                eventName={event.eventName}
                location={event.location}
                date={event.date}
                key={i}
                index={i}
                mdUp={mdUp}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
