import React from 'react';

// eslint-disable-next-line arrow-body-style
const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => (
          <li key={move}>
            <button
              className={`btn-move ${move === currentMove ? 'active' : ''}`}
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'go to game start' : `go to move ${move}`}{' '}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
