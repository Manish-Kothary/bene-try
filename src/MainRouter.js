import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from '../containers/HomeScreen/home';
import Bene from './containers/Bene/bene';


const MainRouter = () => (
  <Switch>
    {/* <Route exact path="/" component={Home} /> */}
    <Route path="/" component={Bene} />
  </Switch>
)

export default MainRouter;
