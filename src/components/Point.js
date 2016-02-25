require('normalize.css');
require('styles/App.css');

import React from 'react';

class Point extends React.Component {
  onClick() {
    this.props.onClick(this.props.index)
  }
  render() {
    let background = this.props.background;
    let size = this.props.size;
    let pos = this.props.position;
    let style = {left: pos.x, top: pos.y, backgroundColor: background, width: size, height: size};

    return(
        <span className="point"  style={style} onClick={this.onClick.bind(this)}></span>
    )
  }
}

export default Point;
