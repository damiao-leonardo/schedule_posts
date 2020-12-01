import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Post from '../pages/post';
import Schedule from '../pages/schedules';

const Routes: React.FC = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/post" component={Post} />
      <Route path="/schedules" component={Schedule} />
    </Switch>
);

export default Routes;
