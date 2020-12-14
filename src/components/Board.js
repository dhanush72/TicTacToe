import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const handleClick = position => {
    if (board[position]) {
      return;
    }
    // eslint-disable-next-line arrow-body-style
    setBoard(previous => {
      return previous.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : '0';
        }
        return square;
      });
    });
    setIsXNext(prev => !prev);
  };

  // eslint-disable-next-line arrow-body-style
  const renderSquare = position => {
    return (
      <Square value={board[position]} onClick={() => handleClick(position)} />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
