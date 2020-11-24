import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ Children, path }: any) => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  const routeComponent = (props: any) =>
    isAuthenticated ? <Children /> : <Redirect to={{ pathname: '/login' }} />;

  return <Route exact path={path} component={routeComponent} />;
};

export default PrivateRoute;
