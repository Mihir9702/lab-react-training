import React, { useState } from 'react';

const LikeButton = () => {
  const colorsArr = [
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
    'teal',
    'aquamarine',
    'white',
    'gray',
  ];

  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        style={{ backgroundColor: colorsArr[count] }}
        onClick={() => setCount(count + 1)}
      >
        {count} Likes
      </button>
    </div>
  );
};

export default LikeButton;
