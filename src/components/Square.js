require('normalize.css');
require('styles/App.css');

import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <div>
        <span className="square"/>
        <span className="square"/>
        <span className="square"/>
        <span className="square"/>
        <div className="big-square"/>
        <div className="small-square" />
      </div>
    )
  }
}
Square.defaultProps = {};

export default Square;
