import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './helpers';

export const App = () => {
  const [history, setHistory] = useState([
    {
      board: Array(9).fill(null),
      isXNext: true,
    },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const handleClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    // eslint-disable-next-line arrow-body-style
    setHistory(previous => {
      const last = previous[previous.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });
      return previous.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>TicTacToe</h1>
      <h2> {message} </h2>
      <Board board={current.board} handleClick={handleClick} />
    </div>
  );
};
