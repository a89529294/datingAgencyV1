import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';

import aboutUsImg from '../../assets/vision.jpg';
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles((theme) => ({
  sectionPadding: {
    ...theme.homePageSection,
  },
  logoText: {
    ...theme.typography.logoText,
  },
  vision: {
    width: '100%',
    height: '100%',
    maxWidth: '500px',
  },
}));

export default function AboutUsTop() {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div className={classes.sectionPadding}>
      <div>
        <Grid container spacing={mdUp ? 4 : 2} justify="space-between">
          <Grid container item xs={12} md={6} alignItems="center">
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h3" color="textPrimary">
                    公司理念
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" color="textSecondary">
                    <span className={classes.logoText}>
                      <span style={{ fontSize: '1rem' }}>17</span>MARRY
                    </span>
                    是劉醫師在國外留學時和同學偶爾會舉辦到俄羅斯和烏克蘭聯誼因而做出了興趣。深感婚友社是個可以幫助人又可以賺錢的事業，回到台灣後除了精進醫術外也和幾位志同道合的朋友投入婚友聯誼產業。
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            justify="center"
            alignItems="flex-start"
          >
            <LazyLoad height={271} once offset={100}>
              <img src={aboutUsImg} className={classes.vision} />
            </LazyLoad>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
