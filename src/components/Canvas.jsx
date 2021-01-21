import React, { Component } from "react";
import Context from "./Context";

class Canvas extends Component {
  constructor() {
    super();
    this.state = { coordPixel: undefined }
    this.handlePixelClick = this.handlePixelClick.bind(this);
    this.getPixels = this.getPixels.bind(this);
    this.createCanvas = this.createCanvas.bind(this);
  }

  handlePixelClick(event) {
    event.target.style.backgroundColor = 'black';
  }

  getPixels(columns, row) {
    let colors = ['white', 'lightgray'];
    if (row % 2 === 0) {
      colors[0] = 'lightgray';
      colors[1] = 'white';
    }
    let column = [];
    for (let col = 1; col <= columns; col += 1) {
      column.push(
        <div
          key={`pixel-${col}`}
          className="pixel"
          style={{
            backgroundColor: col % 2 === 0 ? colors[0] : colors[1],
          }}
          onClick={this.handlePixelClick}
          // onTouchMove={(e) => console.log(e.target)}
          // onMouseOver={(e) => console.log(e.target)}
        />
      );
    }
    return column;
  }

  createCanvas(columns, rows) {
    let canvas = [];
    for (let row = 1; row <= rows; row += 1) {
      canvas.push(
        <div key={`row-${row}`} className="canvas-row">
          {this.getPixels(columns, row)}
        </div>
      );
    }
    return canvas;
  }

  render() {
    return (
      <Context.Consumer>
        {({
          state: {
            canvas: { title, width = 16, height = 16 },
          },
        }) => {
          return (
            <div className="canvas">
              {this.createCanvas(width, height)}
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default Canvas;
