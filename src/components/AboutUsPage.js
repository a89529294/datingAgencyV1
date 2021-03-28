import React from 'react';
import LazyLoad from 'react-lazyload';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  GridList,
  GridListTile,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationIcon from '@material-ui/icons/Room';

import SectionTitle from './partials/SectionTitle';
import heroBg from '../assets/aboutUsBg.jpg';
import aboutUsDating from '../assets/aboutUsDating.png';
import m1Img from '../assets/teamMembers/m1.jpeg';
import m2Img from '../assets/teamMembers/m2.jpeg';
import m3Img from '../assets/teamMembers/m3.jpeg';
import m4Img from '../assets/teamMembers/m4.jpeg';
import m5Img from '../assets/teamMembers/m5.jpeg';
import m6Img from '../assets/teamMembers/m6.jpeg';
import mapImg from '../assets/map.jpeg';
import g1Img from '../assets/aboutUsGallery/gallery1.jpg';
import g2Img from '../assets/aboutUsGallery/gallery2.jpg';
import g3Img from '../assets/aboutUsGallery/gallery3.jpg';
import g4Img from '../assets/aboutUsGallery/gallery4.jpg';

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  heroBg: {
    minHeight: '300px',
    objectFit: 'cover',
    width: 'auto%',
    clipPath: 'polygon(0 0, 100% 0%, 100% 76%, 0% 100%)',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  heroText: {
    ...theme.homePageSection,
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    paddingTop: 0,
    paddingBottom: 0,
  },
  section: {
    ...theme.homePageSection,
  },
  aboutUsVectorImg: {
    maxWidth: '420px',
    height: '100%',
    width: '100%',
  },
  teamTitleSection: {
    ...theme.homePageSectionTitleMarginBottom,
  },
  memberCard: {
    background: theme.palette.common.lightLogoRedBg,
    boxShadow: 'none',
    borderRadius: '8px',
    width: '100%',
    height: '100%',
    transition:
      'box-shadow .25s ease, transform .25s ease, -webkit-transform .25s ease',
    '&:hover': {
      transform: 'translate3d(0,-5px,0)',
      boxShadow:
        '0 1.5rem 2.5rem rgb(22 28 45 / 10%), 0 0.3rem 0.5rem -0.5rem rgb(22 28 45 / 5%) !important;',
    },
  },
  memberCardContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:last-child': { padding: 8 },
  },
  memberCardList: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    padding: 0,
  },
  avatarContainer: {
    marginRight: '24px',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: 16,
    },
  },
  avatar: {
    width: '110px',
    border: '4px solid #e8eaf6',
    height: '110px',
    boxShadow: '0 5px 10px 0 rgb(0 0 0 / 10%)',
    borderRadius: '100%',
  },
  memberText: {
    height: '100%',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  contactUsOverFlowHiddenContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  contactUsContainer: {
    width: '100%',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    position: 'relative',
    maxWidth: '1236px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  contactUsTextSection: {
    ...theme.homePageSection,
    [theme.breakpoints.down('sm')]: {
      padding: '24px 64px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '24px 16px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '96px 64px',
    },
  },
  contactUsMap: {
    flex: '0 0 50%',
    position: 'relative',
    maxWidth: '50%',
    [theme.breakpoints.down('sm')]: {
      flex: '0 0 100%',
      height: '300px',
      maxWidth: '100%',
    },
  },
  contactUsMapOverFlowHidden: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  contactUsMapContainer: {
    left: '0%',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  contactUsMapImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  galleryContainer: {
    backgroundColor: theme.palette.common.lightGrey,
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 8,
  },
}));

const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContainer}>
      <img src={heroBg} className={classes.heroBg} />
      <div className={classes.heroText}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" style={{ color: 'white' }}>
              關於我們
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" style={{ color: 'white' }}>
              也因為大家都有穩定的事業，經濟無虞才能照自己的理念來經營，設定會員入會門檻，從外貌、經濟、人品開始把關，好好為客戶們找尋、篩選需求的對象，進而放心的交往。
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const VectorImgAndTextSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <Grid container spacing={2} justify="space-between">
          <Grid container item alignItems="center" xs={12} md={6}>
            <img src={aboutUsDating} className={classes.aboutUsVectorImg} />
          </Grid>
          <Grid container item alignItems="center" xs={12} md={6}>
            <div>
              <Grid container spacing={2} style={{ marginBottom: 0 }}>
                <Grid item xs={12}>
                  <Typography variant="h4" color="textPrimary">
                    我們的故事
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" color="textPrimary">
                    17MARRY是劉醫師在國外留學時和同學偶爾會舉辦到俄羅斯和烏克蘭聯誼因而做出了興趣。深感婚友社是個可以幫助人又可以賺錢的事業，回到台灣後除了精進醫術外也和幾位志同道合的朋友投入婚友聯誼產業，延續嚴選會員的體制，經常舉辦男女會員一起到國內外聯誼，讓婚友社往更多元發展。(若想認識烏克蘭女孩請至台灣烏克蘭婚姻聯誼協會，除避免受騙風險，亦可體驗不同文化與族群之互動)。
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const SubSection = ({ title, body }) => {
  return (
    <Grid container spacing={2} item xs={12} sm={6}>
      <Grid item xs={12}>
        <Typography variant="h4" color="textPrimary">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" color="textPrimary">
          {body}
        </Typography>
      </Grid>
    </Grid>
  );
};

const AboutUsTextSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ paddingTop: 0 }}>
      <div>
        <Grid container spacing={2}>
          <SubSection
            title="我們是誰"
            body="也因為大家都有穩定的事業，經濟無虞才能照自己的理念來經營，設定會員入會門檻，從外貌、經濟、人品開始把關，好好為客戶們找尋、篩選需求的對象，進而放心的交往。"
          />
          <SubSection
            title="名字來由"
            body=" 我們很重視客戶親自到公司面談的過程，藉由聊天機會讓會員清楚我司營運模式，了解每位會員特質、真實背景及對象需求，不會硬收無法服務的會員而降低素質，也因約會貴在第一印象，總監就是乙級美容造型師，約會前會針對外表、穿著給予免費指導。"
          />
        </Grid>
      </div>
    </div>
  );
};

const teamMembersArray = [
  { profile: m1Img, name: '王郁婷', role: '股東' },
  { profile: m2Img, name: '林世琇', role: '老闆' },
  { profile: m3Img, name: '李怡瑄', role: '媒人' },
  { profile: m4Img, name: '張堅邦', role: '媒人' },
  { profile: m5Img, name: '唐宛真', role: '媒人' },
  { profile: m6Img, name: '黃志強', role: '客服' },
];

const MemberCard = ({ profile, name, role }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} md={4}>
      <Card className={classes.memberCard}>
        <CardContent className={classes.memberCardContent}>
          <ListItem className={classes.memberCardList}>
            <ListItemAvatar className={classes.avatarContainer}>
              <Avatar src={profile} className={classes.avatar}></Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.memberText}>
              <Typography variant="h6" align="center">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                {role}
              </Typography>
            </ListItemText>
          </ListItem>
        </CardContent>
      </Card>
    </Grid>
  );
};

const TeamSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ paddingTop: 0 }}>
      <div>
        <SectionTitle
          title="專業的團隊"
          body="不論團隊決定採行種模式，所有的團隊成員都應該秉持共同合作的精神，在服務的各個層面"
        />
        <Grid container spacing={1}>
          {teamMembersArray.map((member, i) => (
            <MemberCard
              profile={member.profile}
              name={member.name}
              role={member.role}
              key={i}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const classes = useStyles();

  const MyListItem = ({ icon, title, body }) => {
    return (
      <ListItem disableGutters>
        <ListItemAvatar>
          <Avatar>{icon}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="subtitle1" color="textSecondary">
              {title}
            </Typography>
          }
          secondary={
            <Typography
              variant="subtitle1"
              color="textPrimary"
              style={{ fontFamily: 'Lato' }}
            >
              {body}
            </Typography>
          }
        ></ListItemText>
      </ListItem>
    );
  };

  return (
    <div>
      <div className={classes.contactUsOverFlowHiddenContainer}>
        <div className={classes.contactUsContainer}>
          <div className={classes.contactUsTextSection}>
            <div>
              <SectionTitle
                title="聯絡我們"
                body="若您對我們有任何的建議或指教，我們非常歡迎您能來信指教，若您有急需反映之事項，請您致電 客服中心：0809-001-365、線上將有專人為您提供服務。"
              />
              <List disablePadding>
                <MyListItem
                  icon={<PhoneIcon />}
                  title="電話"
                  body="02-1234-5678"
                />
                <MyListItem
                  icon={<EmailIcon />}
                  title="電子信箱"
                  body="service@17marry.me"
                />
                <MyListItem
                  icon={<LocationIcon />}
                  title="地址"
                  body="台北市大安區羅斯福路3段191號3樓"
                />
              </List>
            </div>
          </div>
          <div className={classes.contactUsMap}>
            <div className={classes.contactUsMapOverFlowHidden}>
              <div className={classes.contactUsMapContainer}>
                <LazyLoad height={300} once offset={100}>
                  <img src={mapImg} className={classes.contactUsMapImg} />
                </LazyLoad>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const tileData = [
    {
      img: g1Img,
      title: 'gallery 1 image',
      cols: mdUp ? 1 : 4,
    },
    {
      img: g2Img,
      title: 'gallery 2 image',
      cols: mdUp ? 3 : 4,
    },
    {
      img: g3Img,
      title: 'gallery 3 image',
      cols: mdUp ? 3 : 4,
    },
    {
      img: g4Img,
      title: 'gallery 4 image',
      cols: mdUp ? 1 : 4,
    },
  ];
  return (
    <div className={classes.galleryContainer}>
      <div className={classes.section}>
        <div>
          <SectionTitle
            title="公司據點展示"
            body="我們期許自我及經銷夥伴提供最優質、專業的服務"
          />
          <GridList
            cols={4}
            spacing={mdUp ? 24 : 8}
            cellHeight={mdUp ? 384 : 268}
          >
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols}>
                <LazyLoad height={300} once offset={100}>
                  <img
                    src={tile.img}
                    alt={tile.title}
                    className={classes.galleryImage}
                  />
                </LazyLoad>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </div>
  );
};

export default function AboutUsPage() {
  return (
    <div>
      <HeroSection />
      <VectorImgAndTextSection />
      <AboutUsTextSection />
      <TeamSection />
      <Divider />
      <ContactUs />
      <Divider />
      <Gallery />
    </div>
  );
}
