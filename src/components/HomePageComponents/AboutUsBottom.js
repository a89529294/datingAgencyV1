import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import parse from 'html-react-parser';
import ScrollAnimation from 'react-animate-on-scroll';

import LinkButton from '../_partials/LinkButton';

const useStyles = makeStyles((theme) => ({
  section: {
    ...theme.sectionPadding,
  },
}));

const Section = ({ title, bodyText, mdUp }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
      <ScrollAnimation
        animateIn={mdUp ? 'animate__slideInUp' : 'animate__slideInLeft'}
        animateOnce
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ fontWeight: 600 }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textPrimary">{parse(bodyText)}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" wrap="nowrap">
              <div>
                <LinkButton label="了解更多" />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </Grid>
  );
};

export default function AboutUsBottom() {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div className={classes.section} style={{ paddingTop: 0 }}>
      <div>
        <Grid container spacing={mdUp ? 4 : 2} justify="center">
          <Section
            title="宗旨"
            bodyText="篩選過的會員皆有正當的工作、穩定的經濟來源，歷練後個性也較成熟穩重且動機明確，是真心想找對象共組幸福家庭白頭偕老。"
            mdUp={mdUp}
          />
          <Section
            title="聯絡我們"
            bodyText="服務時間為下午1點半至晚上9點半。請將您的寶貴意見以填寫表單方式送出我們將於工作日由專人以郵件回覆您的問題. 數位客服. 提供更加值且即時的服務"
            mdUp={mdUp}
          />
          <Section
            title="服務據點"
            bodyText="聯絡電話 02-23673367 <br/> 服務時間 下午1點半至晚上9點半 <br/> 地址：台北市大安區羅斯福路三段191號3樓"
            mdUp={mdUp}
          />
        </Grid>
      </div>
    </div>
  );
}
