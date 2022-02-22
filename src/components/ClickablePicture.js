import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [click, setClick] = useState(false);
  return (
    <div>
      <img
        src={click ? imgClicked : img}
        alt="person"
        onClick={() => setClick(!click)}
      />
    </div>
  );
};

export default ClickablePicture;
