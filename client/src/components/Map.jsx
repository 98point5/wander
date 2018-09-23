import React, { Component } from 'react';
import Googlemap from './GoogleMap.jsx'
import axios from 'axios';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nearPlaces: []
    }
  }

  componentDidMount(){
    axios.get('/wander/suggestions/37.783756,-122.409276/37.767,-122.416')
    .then(function (response) {
      console.log(response.data);
    })
  }

  render() {
    return (
      <Googlemap
      // initialCenter={{
      //   lat: 37.7749,
      //   lng: -122.4194,
      // }}
      center={{
        lat: 37.7749,
        lng: -122.4194,
      }}
      zoom={14}
      style={{ width: '100%' , height: 300, position: 'relative' }}
    />
    );
  }
}
