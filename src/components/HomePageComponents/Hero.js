import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ScrollAnimation from 'react-animate-on-scroll';

import heroBg from '../../assets/heroBg.jpg';
import SectionTitle from '../partials/SectionTitle';
import ImageCenterText from '../partials/ImageCenterText';

const useStyles = makeStyles((theme) => ({
  heroBgImg: {
    position: 'relative',
    minHeight: '400px',
    maxHeight: '600px',
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),url(${heroBg})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },

  sectionPadding: {
    ...theme.homePageSection,
  },

  heroHook: {
    backgroundColor: theme.palette.common.lightLogoRedBg,
  },
  heroCardContent: {
    padding: '32px 16px',
    [theme.breakpoints.up('md')]: {
      padding: '48px 24px',
    },
  },
}));

const HeroCard = ({
  title,
  subTitle,
  btnText,
  btnTextLargeScreen,
  btnColor,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Card>
      <CardContent className={classes.heroCardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <Typography variant="h5" color="textPrimary" gutterBottom noWrap>
              {title}
            </Typography>
            <Typography color="textSecondary" noWrap>
              {subTitle}
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={3}
            justify="flex-end"
            alignItems="center"
          >
            <Button variant="contained" color={btnColor} size="large" fullWidth>
              {largeScreen ? btnTextLargeScreen : btnText}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default function Hero() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.heroBgImg}>
        <ImageCenterText
          title="歡迎來到"
          body="讓我們幫你找到你的夢中情人"
          showLogo={true}
        />
      </div>
      <div className={classes.heroHook}>
        <div className={classes.sectionPadding}>
          <div>
            <SectionTitle
              title="您夢寐以求的另一半"
              body="在我們眾多的優質會員中選擇心儀的對象並馬上展開一場浪漫的約會吧！"
            />

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
                  <HeroCard
                    title="我要找黃金單身漢"
                    subTitle="我們有上百位優秀男會員"
                    btnText="搜尋我的如意郎君"
                    btnTextLargeScreen="搜尋"
                    btnColor="primary"
                  />
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12} md={6}>
                <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
                  <HeroCard
                    title="我要找優質美女"
                    subTitle="我們有上百位優秀女會員"
                    btnText="搜尋我的红粉佳人"
                    btnTextLargeScreen="搜尋"
                    btnColor="secondary"
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
