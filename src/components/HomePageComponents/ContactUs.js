import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(180deg, #fff , ${theme.palette.common.lightLogoRedBg} )`,
  },
  section: {
    ...theme.homePageSection,
    maxWidth: '800px',
  },
  cardContent: {
    height: '100%',
    display: 'flex',
    padding: '32px 16px',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      padding: '48px 24px',
    },
  },
}));

export default function ContactUs() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    setIsBtnDisabled(name === '' || email === '' || msg === '');
  }, [name, email, msg]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMsgChange = (event) => {
    setMsg(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <div>
          <Card>
            <CardContent className={classes.cardContent}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" align="center">
                    聯絡我們
                  </Typography>
                  <Typography variant="h6" color="textSecondary" align="center">
                    我們會盡快安排專員與你聯繫
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="姓名"
                    fullWidth
                    variant="outlined"
                    required
                    value={name}
                    onChange={handleNameChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="電子信箱"
                    fullWidth
                    variant="outlined"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="你的訊息"
                    fullWidth
                    variant="outlined"
                    required
                    multiline
                    rows={4}
                    value={msg}
                    onChange={handleMsgChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" gutterBottom>
                    有*的欄位視為必填
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={isBtnDisabled}
                  >
                    送出
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
