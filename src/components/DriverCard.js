import React from 'react';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div>
      <img
        src={img}
        alt="person"
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      />
      <h2>{name}</h2>
      <Rating>{rating}</Rating>
      <h4>
        {car.model} - {car.licensePlate}
      </h4>
    </div>
  );
};

export default DriverCard;
