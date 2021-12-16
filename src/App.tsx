import { Route } from 'react-router-dom';
import { ActionComponent } from './ActionComponent';
import { Layout } from './Layout';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { useState } from 'react';
import { actionLength, getAction } from './actions';
import { useCallback } from 'react';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

export const App = () => {
  const [name, setName] = useState('');
  const [action, setAction] = useState('')
  
  const startSomeAction = useCallback(() => {
    const random = Math.floor(Math.random() * actionLength);
    const action = getAction(name)[random];
    setAction(action)
  }, [name])

  return (
    <ThemeProvider theme={theme}>
      <Route exact path="/" component={() => <Layout setName={setName} startSomeAction={startSomeAction}/>} />
      <Route path="/action" component={() => <ActionComponent name={name} action={action} startSomeAction={startSomeAction}/>} />
    </ThemeProvider>
  );
};
