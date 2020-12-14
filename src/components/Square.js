import React from 'react';

// eslint-disable-next-line arrow-body-style
const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      className="square"
      type="button"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
