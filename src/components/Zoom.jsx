import React, { Component } from "react";
import Context from "./Context";

class Zoom extends Component {
  constructor() {
    super();
    this.handleRange = this.handleRange.bind(this);
  }
  handleRange(value, func) {
    func('zoom', value);
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((px) => {
      px.style.width = `${value}px`;
      px.style.height = `${value}px`;
    })
  }
  render() {
    return (
      <Context.Consumer>
        {({ setInterface, state: { interface: { zoom } } }) => {
          return (
            <div className="zoom-range">
              <label htmlFor="zoom-range">
                Zoom
                <input
                  id="zoom-range"
                  className="zoom-range"
                  type="range"
                  min="1"
                  max="150"
                  value={zoom}
                  onChange={(e) => this.handleRange(e.target.value, setInterface)}
                />
              </label>
            </div>
          )
        }}
      </Context.Consumer>
    );
  }
}

export default Zoom;
