import React from 'react';

const Rating = ({ children }) => {
  const empty = '☆';
  const star = '⭐';
  const rate = Math.round(children);
  if (rate === 0) return <div>{empty.repeat(5)}</div>;
  else if (rate === 1)
    return (
      <div>
        {star}
        {empty.repeat(4)}
      </div>
    );
  else if (rate === 2)
    return (
      <div>
        {star.repeat(2)}
        {empty.repeat(3)}
      </div>
    );
  else if (rate === 3)
    return (
      <div>
        {star.repeat(3)}
        {empty.repeat(2)}
      </div>
    );
  else if (rate === 4)
    return (
      <div>
        {star.repeat(4)}
        {empty}
      </div>
    );
  else return <div>{star.repeat(5)}</div>;
};

export default Rating;
