import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import classNames from 'classnames';
import { TextField } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'white',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  search() {
    //do API call to google maps to typed in search address
    this.setState({});
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            autoFocus={true}
            type="text"
            placeholder="Wander to..."
            // value={this.props.value}
            onKeyUp={this.props.inputSearch}
            id="full-width"
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
          />
          <FormHelperText id="name-helper-text" />
        </form>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            className={classNames(classes.margin, classes.cssRoot)}
            onClick={this.props.handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);
