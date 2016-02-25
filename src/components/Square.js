require('normalize.css');
require('styles/App.css');

import React from 'react';

class Square extends React.Component {
  render() {
    let bigSquareSize = this.props.bigsize;
    let smallSquareSize = this.props.smallsize;
    let bigStyle = {height: bigSquareSize, width: bigSquareSize};
    let smallStyle = {height: smallSquareSize, width: smallSquareSize};
    return (
      <div>
        <span className="square"/>
        <span className="square"/>
        <span className="square"/>
        <span className="square"/>
        <div className="big-square" style={bigStyle} />
        <div className="small-square" style={smallStyle} />
      </div>
    )
  }
}

export default Square;
