import { CircularProgress, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    root: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

export const Loading = () => {
    const classes = useStyles()
  return (
    <Paper square className={classes.root}>
      <CircularProgress />
    </Paper>
  );
};
