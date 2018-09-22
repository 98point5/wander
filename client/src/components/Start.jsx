import React from 'react';
import Button from '@material-ui/core/Button';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render () {
    return (
      <div className="start-bg">
        <Button className="start-button" variant="contained" color="primary" onClick={this.props.changePage}>
          Wander
        </Button>
      </div>
    );
  }

}

export default Start;

