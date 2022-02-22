import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [image, setImage] = useState(0);
  return (
    <div>
      <button onClick={() => setImage(image - 1)} style={{ padding: '24px' }}>
        {'<'}
      </button>
      <img
        src={images[image]}
        alt="portrait"
        style={{ position: 'relative' }}
      />
      <button onClick={() => setImage(image + 1)} style={{ padding: '24px' }}>
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
