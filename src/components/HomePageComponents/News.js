import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import news1Img from '../../assets/news1.jpeg';
import news2Img from '../../assets/news2.jpeg';
import news3Img from '../../assets/news3.jpeg';

SwiperCore.use([Pagination]);

const newsArray = [
  {
    imgSrc: news1Img,
    title: '主編',
    body: '會到婚友社徵婚的男女都是甚麼樣條件的人呢?',
  },
  {
    imgSrc: news2Img,
    title: '主編2',
    body: '女孩，除非你是情場老手及不在乎受騙，最好別輕易嚐試在APP交友',
  },
  {
    imgSrc: news3Img,
    title: '主編3',
    body: '找尋對象，是參加聯誼，還是參加一對一相親約會好呢？',
  },
  {
    imgSrc: news1Img,
    title: '主編4',
    body: '女人，若你想要有好對象，請先培養你的高素質形象',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.homePageSection,
    backgroundColor: theme.palette.common.lightLogoRedBg,
  },
  sectionTitle: {
    ...theme.homePageSectionTitleMarginBottom,
  },
  swiperCard: {
    border: 0,
    maxWidth: '300px',
    boxShadow: 'none',
  },
  SwiperCardImg: {
    height: '185px',
  },
  cardContentTitle: {
    margin: '16px 0px',
  },
}));

const SwiperCard = ({ imgSrc, title, body }) => {
  const classes = useStyles();
  return (
    <Card className={classes.swiperCard}>
      <CardMedia className={classes.SwiperCardImg} image={imgSrc} />
      <CardContent>
        <Typography
          variant="body1"
          color="primary"
          className={classes.cardContentTitle}
        >
          {title}
        </Typography>
        <Typography variant="h6" color="textPrimary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function News() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
        <Grid container spacing={2} className={classes.sectionTitle}>
          <Grid item xs={12}>
            <Typography variant="overline" color="primary">
              閱讀我們的公告及心得
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" color="textPrimary">
              最新公告
            </Typography>
          </Grid>
        </Grid>
        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {newsArray.map((news, i) => (
            <SwiperSlide style={{ width: 'auto' }} key={i}>
              <SwiperCard
                imgSrc={news.imgSrc}
                title={news.title}
                body={news.body}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollAnimation>
    </div>
  );
}
