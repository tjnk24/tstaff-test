import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from '@pages/auth';
import ContactsPage from '@pages/contacts';
import PrivateRoute from '@components/private-route';

const App: FC = () => (
  <Switch>
    <PrivateRoute exact path="/" component={ContactsPage} />
    <Route path="/login" component={AuthPage} />
    <Redirect to="/" />
  </Switch>
);

export default App;
