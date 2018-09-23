import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import classNames from 'classnames';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'white',
    justifyContent: 'center',
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
    background: 'linear-gradient(45deg, #FE6B8B 70%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 100%)',
    },
  },
});

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { classes } = this.props;

    return (
      <div className="bg">
        <div className="start-button">
          <div>Exploring Made Simple</div>
          <br />
          <div className={classes.container}>
            <Button
              variant="contained"
              color="primary"
              className={classNames(classes.margin, classes.cssRoot)}
              onClick={this.props.changePage}
            >
              Wander
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Start);
