import React, { FC } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Auth from './components/layout/Auth';
import Admin from './components/layout/Admin';

import LoginPage from './pages/Auth/Login';
import RecoverPage from './pages/Auth/Recover';
import ResetPage from './pages/Auth/Reset';

import Dashboard from './pages/Dashboard';

const AppRouter: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/auth/login" component={Auth(LoginPage)} />
      <Route exact path="/auth/recover" component={Auth(RecoverPage)} />
      <Route exact path="/auth/reset/:token" component={Auth(ResetPage)} />
      <Route exact path="/" component={Admin(Dashboard)} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
