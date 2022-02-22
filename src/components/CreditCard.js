import React from 'react';
import Visa from '../assets/images/visa.png';
import MasterCard from '../assets/images/master-card.svg';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let visa = false;
  let masterCard = false;

  if (type === 'Visa') visa = true;
  if (type === 'Master Card') masterCard = true;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: bgColor,
          color: color,
          width: '500px',
          margin: '10px',
          borderRadius: '10px',
        }}
      >
        {visa && <img src={Visa} alt="visa" width={50} />}
        {masterCard && <img src={MasterCard} alt="mastercard" width={50} />}
        <h5>**** **** **** {number.slice(-4)}</h5>
        <h3 style={{ whiteSpace: 'nowrap' }}>
          Expires: {expirationMonth}/{expirationYear.toString().slice(-2)}
          <span style={{ marginLeft: '20px', whiteSpace: 'nowrap' }}>
            {bank}
          </span>
        </h3>
        <h3>{owner}</h3>
      </div>
    </div>
  );
};

export default CreditCard;
