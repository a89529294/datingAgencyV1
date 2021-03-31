import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  '@keyframes blinker': {
    '50%': {
      opacity: 0,
    },
  },
  heroTextContainer: {
    ...theme.sectionPadding,
    [theme.breakpoints.only('xs')]: {
      padding: '24px 16px',
    },
    [theme.breakpoints.only('sm')]: {
      padding: '24px 64px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '96px 64px',
    },
  },
  typedText: {
    color: theme.palette.common.darkLogoRed,
  },
  blinkingText: {
    animation: '$blinker 700ms linear infinite',
  },
}));

const HeroText = () => {
  const classes = useStyles();
  const [strArrIdx, setStrArrIdx] = useState(0);
  const [strIdx, setStrIdx] = useState(0);
  const myRef = useRef();
  const strArrIdxRef = useRef();

  const strArray = ['高富帥', '幽默風趣'];

  useEffect(() => {
    const pauseInterval = 2000;
    const forwardInterval = 200;
    const backwardInterval = 50;
    let interval = forwardInterval;
    let direction = 'forward';

    const timeout = () => {
      setTimeout(() => {
        setStrIdx((i) => {
          console.log(strArrIdx);
          if (i === strArray[strArrIdxRef.current].length) {
            interval = backwardInterval;
            direction = 'backward';
            myRef.current.classList.remove(classes.blinkingText);
            return --i;
          } else {
            if (i === 0 && direction === 'backward') {
              interval = forwardInterval;
              direction = 'forward';

              setStrArrIdx((i) => {
                if (i === strArray.length - 1) return 0;
                else return ++i;
              });

              return ++i;
            } else if (direction === 'forward') {
              if (i === strArray[strArrIdxRef.current].length - 1) {
                myRef.current.classList.add(classes.blinkingText);
                interval = pauseInterval;
              }

              return ++i;
            } else {
              return --i;
            }
          }
        });
        timeout();
      }, interval);
    };
    timeout();
  }, []);

  useEffect(() => {
    strArrIdxRef.current = strArrIdx;
  }, [strArrIdx]);

  return (
    <Grid item xs={12} md={6} className={classes.heroTextContainer}>
      <Grid container spacing={2} style={{ marginBottom: 0 }}>
        <Grid item xs={12}>
          <Typography variant="h2" color="textPrimary">
            我心目中得理想情人擁有 <br />
            <span className={classes.typedText}>
              {strArray[strArrIdx].substr(0, strIdx)}
            </span>
            <span className={classes.typedText} ref={myRef}>
              |
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* <Typography variant=""></Typography> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

const HeroImage = () => {
  return <Grid item xs={12} md={6}></Grid>;
};

export default function Hero() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <HeroText />
      <HeroImage />
    </Grid>
  );
}
