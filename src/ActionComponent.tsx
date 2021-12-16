import { makeStyles, Paper, IconButton, Typography, Button } from '@material-ui/core';
import React, { FC } from 'react';
import { useRedirect } from './hook';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useState } from 'react';
import { useEffect } from 'react';
import { Loading } from './Loading';

type ActionProps = {
  action: string;
  name: string;
  startSomeAction: () => void
};

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 10,
  },
  action: {
    padding: 25,
    whiteSpace: 'pre-line',
  },
}));

export const ActionComponent: FC<ActionProps> = ({name, action, startSomeAction }) => {
  const { redirect } = useRedirect('');
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      if(!name) {
        redirect()
      }
    const id = setTimeout(() => {
        setLoading(false);
      }, 3000);
    return () => clearInterval(id);
  }, [action, name, redirect]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Paper className={classes.root} square>
      <header className={classes.header}>
        <IconButton onClick={redirect}>
          <ArrowBackIosIcon />
        </IconButton>
      </header>
      <Typography dangerouslySetInnerHTML={{__html: action}} align='center' className={classes.action}></Typography>
      <Button variant='outlined' onClick={startSomeAction}>One more time</Button>
    </Paper>
  );
};
