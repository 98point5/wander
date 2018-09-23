import React, { Component } from 'react';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
// import orange from '@material-ui/core/colors/orange';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(255, 0, 0, 0.6)',
    },
    // secondary: pink,
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    const { returnToHome } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar color="primary" position="static">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography
                onClick={returnToHome}
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Wander
              </Typography>
              <Button size="large" color="inherit">
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
