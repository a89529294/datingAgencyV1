import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tag: {
    border: '1px solid',
    display: 'inline-block',
    padding: '4px',
    borderRadius: '4px',
  },
}));

export default function Label({ tagColor, tagLabel }) {
  const classes = useStyles();
  return (
    <span
      className={classes.tag}
      style={{
        background: tagColor,
        borderColor: tagColor,
      }}
    >
      <Typography variant="body2" style={{ color: 'white' }}>
        {tagLabel}
      </Typography>
    </span>
  );
}
