import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import PrivateRoute from './components/private-route';

const App = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);

  return (
    <Router>
      <Navbar />
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
    </Router>
  );
};

export default App;
