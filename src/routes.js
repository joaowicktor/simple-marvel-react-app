import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import CharacterDetails from './pages/CharacterDetails';
import NotFound from './pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Main } />
      <Route path="/details" component={ CharacterDetails } />
      <Route path='/not-found' component={ NotFound } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
