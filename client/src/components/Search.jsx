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
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 70%, #FF8E53 100%)',
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
      <div className="bg">
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            autoFocus={true}
            type="text"
            placeholder="Wander to..."
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
