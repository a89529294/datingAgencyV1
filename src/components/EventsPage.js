import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
}));

import EventHero from './EventsPageComponents/EventHero';
import EventDisplay from './EventsPageComponents/EventDisplay';
import { Divider } from '@material-ui/core';

export default function EventsPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <EventHero />
      <EventDisplay />
      <Divider />
    </div>
  );
}
