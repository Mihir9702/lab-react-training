import React from 'react';

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
  return (
    <div>
      <img src={picture} alt="IdPicture" />
      <h2>First Name: {firstName}</h2>
      <h2>Last Name: {lastName}</h2>
      <h2>Height: {height}</h2>
      <h3>Birth: {birth}</h3>
    </div>
  );
};

export default IdCard;
