import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import classNames from 'classnames';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';
import frequentPlaces from '../../../server/sampleData.js'
import FrequentPlaces from './FrequentPlaces';

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
    // opacity: 0.8,
    margin: '0 auto',
    textTransform: 'none',
    textAlign: 'center',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 36,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 70%, #FF8E53 100%)',
    },
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    width: '400px',
    marginBottom: '10px',
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  // search() {
  //do API call to google maps to typed in search address
  //   this.setState({});
  // }

  render() {
    const { classes } = this.props;
    return (
      <div className="bg">
        {/* <form className={classes.container} noValidate autoComplete="off">
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
        </form> */}

        <FormControl className={classes.margin}>
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            className={classes.bootstrapFormLabel}
          >
            Where to?
          </InputLabel>
          <InputBase
            autoFocus={true}
            id="bootstrap-input"
            defaultValue="San Francisco"
            classes={{
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput,
            }}
          />
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
        </FormControl>
        <FrequentPlaces places={this.props.places} handleSelect={this.props.handleDestinationPick}/>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);
