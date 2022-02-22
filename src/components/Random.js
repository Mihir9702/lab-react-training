import React from 'react';
const Random = ({ min, max }) => {
  const random = Math.floor(Math.random() * (max + 1 - min) + min);
  return (
    <div>
      Random value between {min} and {max} {'=>'} {random}
    </div>
  );
};
export default Random;
