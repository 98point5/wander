import React, { Component } from 'react';
import API_KEY from '../../../config.js';

export default class Map extends Component {
  constructor(props) {
    super(props);
  }

  // initMap() {
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 4,
  //     center: { lat: -24.345, lng: 134.46 }, // Australia.
  //   });

  //   var directionsService = new google.maps.DirectionsService();
  //   var directionsDisplay = new google.maps.DirectionsRenderer({
  //     draggable: true,
  //     map: map,
  //     panel: document.getElementById('right-panel'),
  //   });

  //   directionsDisplay.addListener('directions_changed', function() {
  //     this.computeTotalDistance(directionsDisplay.getDirections());
  //   });

  //   this.displayRoute(
  //     'Perth, WA',
  //     'Sydney, NSW',
  //     directionsService,
  //     directionsDisplay
  //   );
  // }

  // displayRoute(origin, destination, service, display) {
  //   service.route(
  //     {
  //       origin: origin,
  //       destination: destination,
  //       waypoints: [
  //         { location: 'Adelaide, SA' },
  //         { location: 'Broken Hill, NSW' },
  //       ],
  //       travelMode: 'DRIVING',
  //       avoidTolls: true,
  //     },
  //     function(response, status) {
  //       if (status === 'OK') {
  //         display.setDirections(response);
  //       } else {
  //         alert('Could not display directions due to: ' + status);
  //       }
  //     }
  //   );
  // }

  // computeTotalDistance(result) {
  //   var total = 0;
  //   var myroute = result.routes[0];
  //   for (var i = 0; i < myroute.legs.length; i++) {
  //     total += myroute.legs[i].distance.value;
  //   }
  //   total = total / 1000;
  //   document.getElementById('total').innerHTML = total + ' km';
  // }

  render() {
    let { destination } = this.props;
    return (
      <div>
        <h1>map</h1>
        <img
          className=""
          src={`
          https://maps.googleapis.com/maps/api/staticmap?center=${destination}&zoom=13&size=600x300&maptype=roadmap
        &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
        &markers=color:red%7Clabel:C%7C40.718217,-73.998284
        &key=${API_KEY}`}
        />

        <div>
          {/* <div id="map" />
          <div id="right-panel">
            <p>
              Total Distance: <span id="total" />
            </p>
          </div> */}

          {/* <img
            src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${
              this.initMap
            }`}
          /> */}
        </div>

        <br />
        <div>
          <div>name</div>
          <div>description</div>
          <div>rating</div>
          <div>$$$</div>
          <div>distance/time added</div>
        </div>
      </div>
    );
  }
}
