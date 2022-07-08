import React from 'react';
import { Route as RouteTypes } from '@types';
import { Route, Switch } from 'react-router-dom';

type RouterProps = { routes: RouteTypes[] };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AppRouters = ({ routes }: RouterProps) => {
  return (
    <Switch>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  );
};

export default AppRouters;
