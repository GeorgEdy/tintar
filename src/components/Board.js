require('normalize.css');
require('styles/App.css');

import React from 'react';
import Square from './Square';
import Point from './Point';

class Board extends React.Component {
  constructor() {
    super();
    this.state = this.initialState();
  }

  render() {
    const square = <Square bigsize={this.state.bigSquareSize} smallsize={this.state.smallSquareSize}/>;
    let points = [];
    let background = '#000';
    let size = 10;

    let currentPlayer = this.state.currentPlayer;
    for (let i = 0; i < this.state.pointNumber; i++) {
      if (i === 12 || i === 13 || i === 14) {
        continue;
      }

      let player = this.state.board[i].players;
      if (player === 1) {
        background = '#cc0000';
        size = 25;
      }
      else if (player === 2) {
        background = '#00ff00';
        size = 25;
      }
      else {
        background = '#000';
        size = 10;
      }
      let point = <Point
        key={i}
        number={i}
        index={i}
        currentPlayer={currentPlayer}
        player={this.state.board[i].players}
        background={background}
        size={size}
        position={this.state.board[i].pos}
        onClick={this.onPointClick.bind(this)}/>;

      points.push(point);
    }
    let boardStyle = {height: this.state.boardSize, width: this.state.boardSize};
    return (
      <div>
        <div className="board" style={boardStyle}>
          {square}
          {points}
        </div>
        <div className="wrap"></div>
        <div className="player-turn">To move:
          <div>Player {this.state.currentPlayer}</div>
        </div>
        <div className="restart" onClick={this.resetPieces.bind(this)}>Restart</div>
      </div>
    )
  }
  initialState() {
    const boardSize = 400;
    const bigSquareSize = 300;
    const smallSquareSize = 150;
    const pointNumber = 27;

    let board = [];
    for (let i = 0; i < pointNumber; i++) {
      if (0 < i < 8) {
        let x = Math.floor(i % 3) * boardSize / 2;
        let y = Math.floor(i / 3) * boardSize / 2;
        let pos = {x: x, y: y};

        board.push({pos, players: 0});
      }
      if (9 < i < 18) {

        let x = Math.floor(i % 3) * smallSquareSize / 2;
        let y = Math.floor(i / 3) * smallSquareSize / 2;
        let pos = {x: (125 + x), y: (125 + y)};
        board.push({pos, smallSquareSize, players: 0});
      }
      if (19 < i < 27) {
        let x = Math.floor(i % 3) * bigSquareSize / 2;
        let y = Math.floor(i / 3) * bigSquareSize / 2;
        let pos = {x: (50 + x), y: (50 + y)};

        board.push({pos, bigSquareSize, players: 0});
      }
    }
    return {
      pointNumber, board, boardSize, bigSquareSize, smallSquareSize, currentPlayer: 1, pieceCount: 0
    };
  }
  resetPieces() {
    this.state = this.initialState();
    this.forceUpdate();
  }
  onPointClick(i) {
    this.setState({pieceCount: this.state.pieceCount + 1});
    if (this.state.pieceCount < 18) {
      let player = this.state.board[i].players;
      let currentPlayer = this.state.currentPlayer;
      if (player === 0) {
        if (currentPlayer === 1) {
          this.state.currentPlayer = 2;
          this.state.board[i].players = 1;
        }
        else if (currentPlayer === 2) {
          this.state.currentPlayer = 1;
          this.state.board[i].players = 2;
        }
      }
    }
  }
}

export default Board;
