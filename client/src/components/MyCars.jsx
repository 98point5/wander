import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class MyCars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = props;
    return (
      <div>
        <h1>My Cars</h1>

        <div>{}</div>
      </div>
    );
  }
}

export default withStyles(styles)(MyCars);
