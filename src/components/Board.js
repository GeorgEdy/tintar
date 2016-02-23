require('normalize.css');
require('styles/App.css');

import React from 'react';
import Square from './Square';

class Board extends React.Component {
  render() {
    const square = <Square />;
    return (
      <div className="board">
        {square}
      </div>
    )
  }
}
Board.defaultProps = {};

export default Board;
