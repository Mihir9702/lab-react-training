import React, { useState } from 'react';

const NumbersTable = ({ limit }) => {
  const fromLimit = [];
  const [red, setRed] = useState(true);
  while (limit > 0) {
    fromLimit.push(limit);
    limit--;
  }
  const nums = fromLimit.sort((a, b) => a - b);

  return (
    <div>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          gridTemplateColumns: 'auto auto auto',
          gridTemplateRows: 'auto auto auto',
        }}
      >
        {nums.map((num, numIndex) => {
          return (
            <div
              style={{
                padding: '16px',
                backgroundColor: numIndex % 2 ? 'red' : 'white',
                border: '1px solid black',
                width: '64px',
              }}
            >
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NumbersTable;
