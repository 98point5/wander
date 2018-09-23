import React from 'react';
import Place from './Place.jsx';

function FrequentPlaces(props) {
  const places = props.places;
  console.log(places);
  return (
    <div className='column'>
      {places.map(place => (
        <div>
          <Place place={place} handleSelect={props.handleSelect}/>
        </div>
      ))}
    </div>
  );
}

export default FrequentPlaces;