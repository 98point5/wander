import React, { Component } from 'react';
import Googlemap from './GoogleMap.jsx'
import axios from 'axios';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nearPlaces: [],
      startPoint: '37.783756,-122.409276',
      endPoint: '37.768,-122.448',
      start: {lat: 37.783756, lng: -122.409276},
      end: {lat: 37.768, lng: -122.4448},
      center: {}
    }
  }

  componentDidMount(){
    const { startPoint, endPoint } = this.state
    axios.get(`/wander/suggestions/${startPoint}/${endPoint}`)
    .then( ({ data }) => {
      this.setState({
        nearPlaces: data.results
      })
    })
    let startLoc = startPoint.split(',');
    let endLoc = endPoint.split(',');
    let midLat = ((+startLoc[0] + +endLoc[0])/2).toFixed(6);
    let midLong = ((+startLoc[1] + +endLoc[1])/2).toFixed(6);
    this.setState({
      center: {lat: +midLat, lng: +midLong}
    })
  }

  render() {
    return (
      <div className='bg'>
        <div >
          <Googlemap
          initialCenter={this.state.center}
          nearPlaces={this.state.nearPlaces}
          center={this.state.center}
          zoom={13.5}
          style={{ width: '100%' , height: 400 }}
          startPoint={this.state.start}
          endPoint={this.state.end}
          />
        </div>
          <div style={{ 'padding-top': '410px'}} className="blurp">
            {this.state.nearPlaces.map(place =>
              <div className="blurp2">
              {place.name}
                <div>
                  <div>{`Name: ${place.name}`}</div>
                  <div>{"Opening Hours: " + JSON.stringify(place.opening_hours)}</div>
                  <div>{`Rating: ${place.rating}`}</div>
                </div>
              </div>

            )}
          </div>
        </div>
      // </div>
    );
  }
}
