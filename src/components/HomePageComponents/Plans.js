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

import plan1Img from '../../assets/plan1.jpg';
import plan2Img from '../../assets/plan2.jpg';
import plan3Img from '../../assets/plan3.jpg';
import plan4Img from '../../assets/plan4.jpg';
import plan5Img from '../../assets/plan5.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.lightGreyBg,
  },
  section: {
    ...theme.homePageSection,
  },
  sectionTop: {
    marginBottom: '24px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '32px',
    },
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
          <Grid container spacing={mdUp ? 4 : 2}>
            <Plan
              imgSrc={plan1Img}
              title="最新一對一客製相親專案"
              content="嚴選條件+超高配對率，尊重會員隱私是我們婚友社十年來的經營特色"
            />
            <Plan
              imgSrc={plan2Img}
              title="金龜婿專案"
              content="我們很重視客戶親自到公司面談的過程，藉由聊天機會了解每位會員特質、真實背景及對象需求，讓會員清楚我司營運模式及會員素質"
            />
            <Plan
              imgSrc={plan3Img}
              title="二春幸福專案"
              content="失婚後的日子往往是漫長孤獨的，寂寞的，很多時候渴望愛情的來臨"
            />
            <Plan
              imgSrc={plan4Img}
              title="小資女孩免費排約專案"
              content="女30歲內、單身或未婚，大學以上學歷，身高155cm以上，清秀、健康、單純、有正當職業，身材勻稱、身心健全、無不良嗜、無前科紀錄、無負債之清秀佳人"
            />
            <Plan
              imgSrc={plan5Img}
              title="富豪徵婚"
              content="(年收300萬以上)或(資產達3000萬以上)或(上市櫃公司家族或富二代等級)"
            />
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
