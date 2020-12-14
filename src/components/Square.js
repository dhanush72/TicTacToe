import React from 'react';

// eslint-disable-next-line arrow-body-style
const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
