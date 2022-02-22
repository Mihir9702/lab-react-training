import React from 'react';

const BoxColor = ({ r, g, b }) => {
  return (
    <div style={{ padding: '16px', backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <h2>rgb{`(${r},${g},${b})`}</h2>
    </div>
  );
};

export default BoxColor;
