import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    flex: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }),
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar className={classes.flex}>
            <RouterLink to="/">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <HomeIcon style={{ fill: '#EEE' }} width="125%" />
              </IconButton>
            </RouterLink>
            <RouterLink to="/login">
              <Button variant="contained">Login</Button>
            </RouterLink>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
