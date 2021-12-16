import { Box, Button, makeStyles, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { FC } from 'react';
import { useState } from 'react';
import { useRedirect } from './hook';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginTop: 20
  },
}));

type LayoutProps = {
    setName: (name: string) => void
    startSomeAction: () => void
}

export const Layout:FC<LayoutProps> = ({setName, startSomeAction}) => {
  const [tempName, setTempName] = useState('');
  const { redirect } = useRedirect('action');
  const classes = useStyles();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setTempName(value);
  };

  const onClick = () => {
    setName(tempName)
    redirect()
    startSomeAction()
  }

  return (
    <Paper square className={classes.root}>
      <Box display='flex' flexDirection='column'>
        <TextField value={tempName} onChange={onChange} id="name" label="Name" />
        <Button
          disabled={!tempName}
          variant="contained"
          color="primary"
          onClick={onClick}
          className={classes.button}
        >
          Play
        </Button>
      </Box>
    </Paper>
  );
};
