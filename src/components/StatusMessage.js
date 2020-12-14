import React from 'react';

// eslint-disable-next-line arrow-body-style
const StatusMessage = ({ winner, current }) => {
  // gives boolean values
  const noMovesLeft = current.board.every(ele => ele !== null);

  return (
    <div>
      <h2>
        {winner && `Winner is ${winner}`}
        {!winner &&
          !noMovesLeft &&
          `Next Player is ${current.isXNext ? 'X' : 'O'}`}
        {!winner && noMovesLeft && 'X and O tied'}
      </h2>
    </div>
  );
};

export default StatusMessage;
