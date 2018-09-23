import React from 'react';
import { apiKey } from '../../../config.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Googlemap extends React.Component {
  render() {
    const {
      google, zoom, initialCenter,
      center, style,
    } = this.props;
    return (
      <div className={style.main_map}>
        <Map
          google={google}
          zoom={zoom}
          // initialCenter={initialCenter}
          center={center}
          style={style}
        >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} 
                  position={center}
          />
          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey,
})(Googlemap);