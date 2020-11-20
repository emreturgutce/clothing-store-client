import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';

const App = () => (
  <Router>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Container>
  </Router>
);

export default App;
