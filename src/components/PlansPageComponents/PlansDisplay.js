import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  useTheme,
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import LazyLoad from 'react-lazyload';

import { plansArray } from '../../db';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    backgroundImage: `linear-gradient(180deg, #fff , ${theme.palette.common.lightLogoRed} )`,
  },
  root: {
    ...theme.sectionPadding,
  },
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    borderRadius: 8,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  cardMedia: {
    position: 'relative',
    flex: '1 1 50%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      flex: '1 1 100%',
    },
  },
  planImage: {
    width: '100%',
    height: '100%',
    minHeight: '300px',
    objectFit: 'cover',
    borderRadius: '0px 0px 160px 0px',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 50%',
    '&:last-child': {
      padding: '32px 16px',
      [theme.breakpoints.up('md')]: {
        padding: '48px 24px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      flex: '1 1 100%',
    },
  },
  cardContentMain: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

const Plan = ({ img, title, body, index, smUp }) => {
  const classes = useStyles();
  const flexDirection = smUp ? (index % 2 ? 'row-reverse' : 'row') : 'column';
  const borderRadius = smUp && index % 2 ? '0 0 0 160px' : '0 0 160px 0';

  return (
    <Grid item xs={12}>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
        <Card
          className={classes.card}
          style={{
            flexDirection,
          }}
        >
          <CardMedia component="div" className={classes.cardMedia}>
            <LazyLoad height={300} once offset={100}>
              <img
                alt="plan image"
                src={img}
                className={classes.planImage}
                style={{ borderRadius }}
              />
            </LazyLoad>
          </CardMedia>
          <CardContent className={classes.cardContent}>
            <div className={classes.cardContentMain}>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                {title}
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                {body}
              </Typography>
              <Button color="primary" variant="outlined">
                了解更多
              </Button>
            </div>
          </CardContent>
        </Card>
      </ScrollAnimation>
    </Grid>
  );
};

export default function PlansDisplay() {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className={classes.rootContainer}>
      <div className={classes.root}>
        <Grid container spacing={mdUp ? 4 : 2}>
          {plansArray.map((plan, i) => (
            <Plan
              img={plan.img}
              title={plan.title}
              body={plan.body}
              key={i}
              index={i}
              smUp={smUp}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
}
