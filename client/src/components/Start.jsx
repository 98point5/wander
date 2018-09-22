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
      <div className="bg">
        <div className="start-button" onClick={this.props.changePage}>
          Wander
        </div>
      </div>
    );
  }

}

export default Start;

