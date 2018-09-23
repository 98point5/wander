import React from 'react';
import Place from './Place.jsx';

function FrequentPlaces(props) {
  const places = props.places;
  console.log(places);
  return (
    <div className='bg column'>
      {places.map(place => (
        <div>
          <Place place={place} />
        </div>
      ))}
    </div>
  );
}

export default FrequentPlaces;