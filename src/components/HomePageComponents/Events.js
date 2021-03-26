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

import LinkButton from '../LinkButton';

const eventArray = [
  {
    tagColor: 'rgb(33,150,243)',
    tagLabel: '近期',
    eventName: '聖誕活動',
    location: '台北,台灣',
    date: '2020-12-25',
  },
  {
    tagColor: 'rgb(33,150,243)',
    tagLabel: '近期',
    eventName: '百萬年薪與甜美女孩',
    location: '台中,台灣',
    date: '2020-12-20',
  },
  {
    tagColor: 'rgb(156,39,176)',
    tagLabel: '安派中',
    eventName: '精英調酒派對',
    location: '台南,台灣',
    date: '2021-06-11',
  },
  {
    tagColor: 'rgb(233,30,99)',
    tagLabel: '已過',
    eventName: '陽光男孩與年美女孩',
    location: '東京,日本',
    date: '2018-01-02',
  },
  {
    tagColor: 'rgb(233,30,99)',
    tagLabel: '已過',
    eventName: '碧海藍天夏威夷',
    location: '夏威夷,美國',
    date: '2017-05-30',
  },
];

const useStyles = makeStyles((theme) => ({
  section: {
    ...theme.homePageSection,
  },
  titleMarginBottom: {
    ...theme.homePageSectionTitleMarginBottom,
  },
  eventCard: {
    width: '100%',
    transition: 'box-shadow .25s ease, transform .25s ease',
    '&:hover': {
      transform: 'translate3d(0,-5px,0)',
      boxShadow:
        '0 1.5rem 2.5rem rgb(22 28 45 / 10%), 0 0.3rem 0.5rem -0.5rem rgb(22 28 45 / 5%) !important',
    },
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
  tag: {
    border: '1px solid',
    display: 'inline-block',
    padding: '4px',
    borderRadius: '4px',
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
                <span
                  className={classes.tag}
                  style={{
                    background: tagColor,
                    borderColor: tagColor,
                  }}
                >
                  <Typography variant="body2" style={{ color: 'white' }}>
                    {tagLabel}
                  </Typography>
                </span>
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
