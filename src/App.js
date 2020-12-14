import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './helpers';

export const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;

  const handleClick = position => {
    if (board[position] || winner) {
      return;
    }
    // eslint-disable-next-line arrow-body-style
    setBoard(previous => {
      return previous.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsXNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>TicTacToe</h1>
      <h2> {message} </h2>
      <Board board={board} handleClick={handleClick} />
    </div>
  );
};
