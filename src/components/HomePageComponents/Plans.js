import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import parse from 'html-react-parser';
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';

import { plansArray } from '../../db';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.lightLogoRed,
  },
  section: {
    ...theme.sectionPadding,
  },
  sectionTop: {
    ...theme.sectionTitleMarginBottom,
  },
  logoText: {
    ...theme.typography.logoText,
    fontSize: '1rem',
  },
  card: {
    boxShadow: '0 7px 14px 0 rgb(0 0 0 / 10%)',
  },
  cardImg: {
    display: 'flex',
    position: 'relative',
    minHeight: '280px',
    alignItems: 'flex-end',
  },
  logoTextSecondary: {
    ...theme.typography.logoText,
    fontSize: '0.8rem',
  },
}));

const Plan = ({ imgSrc, title, content }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
        <LazyLoad once offset={100} height={300}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardImg}
              image={imgSrc}
              title="plan 1 image"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" color="textPrimary">
                {title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {parse(content)}
              </Typography>
            </CardContent>
          </Card>
        </LazyLoad>
      </ScrollAnimation>
    </Grid>
  );
};

export default function Plans() {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <div>
          <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
            <Grid container spacing={2} className={classes.sectionTop}>
              <Grid item xs={12}>
                <Typography variant="h4" color="textPrimary" align="center">
                  優惠專案
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" color="textSecondary" align="center">
                  不管你是哪個族群的人，趕緊來看看
                  <span className={classes.logoText}>17Marry</span>
                  為您量身定做的方案吧！
                </Typography>
              </Grid>
            </Grid>
          </ScrollAnimation>

          <Grid container spacing={mdUp ? 4 : 2}>
            {plansArray.map(
              (plan, i) =>
                i < 3 && (
                  <Plan
                    imgSrc={plan.img}
                    title={plan.title}
                    content={plan.body}
                  />
                )
            )}
            <Grid container item xs={12} justify="center">
              <Button variant="outlined" color="primary">
                查看全部
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
