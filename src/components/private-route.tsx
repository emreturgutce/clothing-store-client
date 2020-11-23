import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, path }: any) => {
  const routeComponent = (props: any) =>
    isAuthenticated ? (
      <p>hello world</p>
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );

  console.log('PRIVATE ROUTE');

  return <Route exact path={path} component={routeComponent} />;
};

export default PrivateRoute;
