import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.sectionPadding,
    paddingTop: '0 !important',
    position: 'relative',
  },
}));

import EventHero from './EventsPageComponents/EventHero';

export default function EventsPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <EventHero />
    </div>
  );
}
