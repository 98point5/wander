import React from 'react';
import { apiKey } from '../../../config.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Googlemap extends React.Component {
  render() {
    const {
      google, zoom, nearPlaces, initialCenter, 
      center, style,
    } = this.props;
    console.log(center)
    return (
      <div>
        <div>{JSON.stringify(center)}</div>
        <div className={style.main_map}>
          <Map
            google={google}
            zoom={zoom}
            initialCenter={initialCenter}
            // center={center}
            style={style}
          >
          {nearPlaces.map(place =>
            <Marker
              name={place.name} 
              position={{
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng,
              }}
            />
          )}
            <InfoWindow onClose={this.onInfoWindowClose}>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey,
})(Googlemap);