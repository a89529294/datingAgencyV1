import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import heroBg from '../assets/heroBg.jpg';

const useStyles = makeStyles((theme) => ({
  heroBgImg: {
    position: 'relative',
    minHeight: '400px',
    maxHeight: '600px',
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),url(${heroBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  heroText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  sectionPadding: {
    width: '100%',
    margin: '0 auto',
    padding: '48px 16px',
    maxWidth: '1236px',
    [theme.breakpoints.up('sm')]: {
      padding: '64px 64px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '96px 64px',
    },
  },
  fontWhite: {
    color: 'white',
  },
  logoText: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: 'rgba(217,39,31,255)',
  },
  heroHook: {
    backgroundColor: 'rgb(247, 249, 250);',
  },
  heroHookTitleBlock: {
    marginBottom: '24px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '32px',
    },
  },
  heroCardContent: {
    padding: '32px 16px',
    [theme.breakpoints.up('md')]: {
      padding: '48px 24px',
    },
  },
}));

const HeroCard = ({ title, subTitle, btnText }) => {
  const classes = useStyles();
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
            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
            >
              {btnText}
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
        <div className={`${classes.heroText} ${classes.sectionPadding}`}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.fontWhite}>
                歡迎來到
                <span className={classes.logoText}>
                  <span style={{ fontSize: '1rem' }}>17</span>Marry
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.fontWhite}>
                讓我們幫你找到你的夢中情人
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.heroHook}>
        <div className={classes.sectionPadding}>
          <div>
            <Grid container spacing={2} className={classes.heroHookTitleBlock}>
              <Grid item xs={12}>
                <Typography variant="h4" color="textPrimary" align="center">
                  您夢寐以求的另一半
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" color="textSecondary" align="center">
                  在我們眾多的優質會員中選擇心儀的對象並馬上展開一場浪漫的約會吧！
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <HeroCard
                  title="我要找黃金單身漢"
                  subTitle="我們有上百位優秀男會員"
                  btnText="搜尋我的如意郎君"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <HeroCard
                  title="我要找優質美女"
                  subTitle="我們有上百位優秀女會員"
                  btnText="搜尋我的红粉佳人"
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
