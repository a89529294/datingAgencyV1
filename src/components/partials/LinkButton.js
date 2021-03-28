import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
}));

export default function LinkButton({ label }) {
  const classes = useStyles();
  return (
    <a className={classes.link}>
      <Typography variant="subtitle1" color="primary">
        {label}
      </Typography>
      <IconButton color="primary">
        <ArrowRightAltIcon color="primary" />
      </IconButton>
    </a>
  );
}
