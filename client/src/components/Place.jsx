import React from 'react';

function Place(props) {
  const place = props.place;
  return (
    <div className="description" >
        <div>{place.nickName}</div>
      <div>Times Visited: {place.timesVisited}</div>
    </div>
  )
}


export default Place;