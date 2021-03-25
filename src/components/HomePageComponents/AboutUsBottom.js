import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import parse from 'html-react-parser';

const useStyles = makeStyles((theme) => ({
  section: {
    ...theme.homePageSection,
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
}));

const Section = ({ title, bodyText }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={4}>
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
              <a className={classes.link}>
                <Typography variant="subtitle1" color="primary">
                  了解更多
                </Typography>
                <IconButton color="primary">
                  <ArrowRightAltIcon color="primary" />
                </IconButton>
              </a>
            </div>
          </Grid>
        </Grid>
      </Grid>
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
          />
          <Section
            title="聯絡我們"
            bodyText="服務時間為下午1點半至晚上9點半。請將您的寶貴意見以填寫表單方式送出我們將於工作日由專人以郵件回覆您的問題. 數位客服. 提供更加值且即時的服務"
          />
          <Section
            title="服務據點"
            bodyText="聯絡電話 02-23673367 <br/>
服務時間 下午1點半至晚上9點半 <br/>
地址：台北市大安區羅斯福路三段191號3樓"
          />
        </Grid>
      </div>
    </div>
  );
}
