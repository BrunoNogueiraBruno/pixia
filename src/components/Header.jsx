import React, { Component } from "react";
import Context from "./Context";

class Header extends Component {
  render() {
    return (
      <Context.Consumer>
        {({
          state: {
            canvas: { title, width = 16, height = 16 },
          },
        }) => {
          return (
            <header className="canvas-header">
              <h1>{title}</h1>
              <p>{`${width}x${height}px`}</p>
            </header>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default Header;
