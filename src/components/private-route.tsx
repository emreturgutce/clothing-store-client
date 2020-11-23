import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ Children, isAuthenticated, path }: any) => {
  const routeComponent = (props: any) =>
    isAuthenticated ? <Children /> : <Redirect to={{ pathname: '/login' }} />;

  return <Route exact path={path} component={routeComponent} />;
};

export default PrivateRoute;
