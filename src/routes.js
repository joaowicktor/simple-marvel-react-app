import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import CharacterDetails from './pages/CharacterDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Main } />
      <Route path="/details" component={ CharacterDetails } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
