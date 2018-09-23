import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CarCard from './CarCard';

export default class MyCars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carIds: [],
    };
  }

  componentDidMount() {
    fetch('/wander/vehicles')
      .then(res => res.json())
      .then(({ data }) =>
        this.setState({
          carIds: data,
        })
      );
  }

  render() {
    const { handleCarPick } = this.props;

    let rows = this.state.carIds.map((carId, key) => {
      return (
        <CarCard
          carId={carId}
          key={key}
          handleSelect={() => this.props.handleSelect(carId)}
        />
      );
    });

    return (
      <div className="bg">
        <div className="flex">{rows}</div>
      </div>
    );
  }
}
