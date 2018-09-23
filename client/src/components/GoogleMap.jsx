import React from 'react';
import { apiKey } from '../../../config.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Googlemap extends React.Component {
  render() {
    const {
      google, zoom, nearPlaces, initialCenter, 
      center, style,
    } = this.props;
    return (
      <div>
        <div className={style.main_map}>
          <Map
            google={google}
            zoom={zoom}
            initialCenter={initialCenter}
            center={center}
            style={style}
          >
            <Marker
              position={this.props.startPoint}
              icon={{
                url: "./icons/usr_loc.png",
              }} 
            />
            <Marker
              position={this.props.endPoint}
              icon={{
                url: "./icons/pin.png",
              }} 
            />
          {nearPlaces.map(place =>
            <Marker
              name={place.name} 
              position={{
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng,
              }}
              icon={{
                url: "./icons/flag.png",
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