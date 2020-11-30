import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from '@pages/auth';

const App: FC = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect to="/" />
  </Switch>
);

export default App;
