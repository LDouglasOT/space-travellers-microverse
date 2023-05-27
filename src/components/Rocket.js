/* eslint-disable */ 
import React from 'react';

function Rocket(props) {
  const {
    description, rocket_id, rocket_name, flickr_images,
  } = props.rocketData;
  const imageURL = flickr_images?.[0];
  return (
    <div className="rocket">
      <div className="rocket-img-wrapper">
        <img className="rocket-img" src={imageURL} alt={rocket_name} />
      </div>
      <div className="rocket-details">
        <h3>{rocket_name}</h3>
        <p>{description}</p>
        <button type="button" className="reserve-btn" data-id={rocket_id}>
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}

export default Rocket;
