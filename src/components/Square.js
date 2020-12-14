import React from 'react';

// eslint-disable-next-line arrow-body-style
const Square = ({ value, onClick }) => {
  return (
    <button className="square" type="button" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
