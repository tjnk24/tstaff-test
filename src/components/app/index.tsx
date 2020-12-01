import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from '@pages/auth';
import ContactsPage from '@pages/contacts';

const App: FC = () => (
  <Switch>
    <Route exact path="/" component={AuthPage} />
    <Route exact path="/contacts" component={ContactsPage} />
    <Redirect to="/" />
  </Switch>
);

export default App;
