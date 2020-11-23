import React, { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import PrivateRoute from './components/private-route';
import { getUser, AuthActionTypes } from './actions';

const App = () => {
  const { isAuthenticated: isAuth, isLoading } = useSelector(
    (state: any) => state.auth,
  );
  const dispatch = useDispatch();

  const get = useCallback(() => dispatch(getUser()), [dispatch, getUser]);

  useEffect(() => {
    dispatch({
      type: AuthActionTypes.USER_LOADING,
    });
    get();
  }, []);

  return (
    <Router>
      <>
        <Navbar />
        {isLoading ? (
          <div
            style={{
              width: '100%',
              height: '90%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <>
            <Container>
              <Switch>
                <PrivateRoute
                  exact
                  path="/"
                  isAuthenticated={isAuth}
                  Children={Home}
                />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
              </Switch>
            </Container>
          </>
        )}
      </>
    </Router>
  );
};

export default App;
