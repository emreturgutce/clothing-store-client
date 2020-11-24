import React, { useState, useCallback } from 'react';
import { Link as RouterLink, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'react-helmet';
import validator from 'validator';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { registerUser, AuthActionTypes } from '../actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated: isAuth, isLoading } = useSelector(
    (state: any) => state.auth,
  );

  const register = useCallback(
    (firstName: string, lastName: string, email: string, password: string) =>
      dispatch(registerUser(firstName, lastName, email, password)),
    [dispatch, registerUser],
  );

  const userLoading = useCallback(
    () => dispatch({ type: AuthActionTypes.USER_LOADING }),
    [dispatch],
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      validator.isEmail(email) &&
      validator.isLength(password, { min: 6 }) &&
      validator.isMobilePhone(phone, ['tr-TR'])
    ) {
      userLoading();
      register(name, phone, email, password);
      history.push('/');
    }
  };

  return (
    <>
      {!isAuth ? (
        <>
          <Helmet>
            <title>Clothing Store - Signup</title>
          </Helmet>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={classes.form} noValidate onSubmit={onSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="name"
                      name="Name"
                      variant="outlined"
                      fullWidth
                      id="Name"
                      label="Name"
                      autoFocus
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <PhoneInput
                      country={'tr'}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      inputProps={{
                        name: 'phone',
                      }}
                      inputStyle={{
                        width: '100%',
                        backgroundColor: '#FAFAFA',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      error={email !== '' && !validator.isEmail(email)}
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      error={
                        password !== '' &&
                        !validator.isLength(password, { min: 6 })
                      }
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isLoading}
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <RouterLink to="/login" id="login-router-link">
                      <span>Already have an account? Sign in</span>
                    </RouterLink>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
