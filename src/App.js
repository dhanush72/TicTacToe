import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './helpers';
import History from './components/History';
import StatusMessage from './components/StatusMessage';

const NEW_GAME = [
  {
    board: Array(9).fill(null),
    isXNext: true,
  },
];

export const App = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  const { winner, winningSquares } = calculateWinner(current.board);

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

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>TicTacToe</h1>
      <h2>
        <StatusMessage winner={winner} current={current} />
      </h2>
      <Board
        board={current.board}
        handleClick={handleClick}
        winningSquares={winningSquares}
      />
      <button type="button" onClick={onNewGame}>
        Start new game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
