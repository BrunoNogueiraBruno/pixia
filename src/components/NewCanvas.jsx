import React, { Component } from "react";
import GetIcon from "./Icons";

class NewCanvas extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      width: "",
      height: "",
    };
    this.getInput = this.getInput.bind(this);
  }

  getInput(id, value, placeholder, type) {
    return (
      <label htmlFor={`${id}-input`}>
        <input
          id={`${id}-input`}
          name={`${id}-input`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => this.setState({ [id]: e.target.value })}
        />
      </label>
    );
  }

  render() {
    const { title, dimensionSelector, width, height } = this.state;
    return (
      <form className="new-canvas-container">
        {this.getInput("title", title, "untitled", "text")}
        <div className="dimension-input-container">
          <div>

            <div>
              {this.getInput("width", width, "0", "number")}
              <button
                type="button"
                className="arrow-rep-icon"
                onClick={() => this.setState({ width: height, height: width })}
              >
                <GetIcon name="arrowRepeatIcon" />
              </button>
              {this.getInput("height", height, "0", "number")}
            </div>

            <select id="unit-measurement">
              <option value="px">px</option>
              <option value="mm">mm</option>
              <option value="cm">cm</option>
            </select>
          </div>
        </div>
        <label htmlFor="dimensionSelector">
          <span>Predefined:</span>
          <select
            id="dimensionSelector"
            value={dimensionSelector}
            onChange={(e) => {
              const dimension = e.target.value.split('x');
              this.setState({ height: dimension[0], width: dimension[1] })
            }}
          >
            <option key="100x100" value="100x100">100x100</option>
            <option key="1920x1080" value="1920x1080">1920x1080</option>
          </select>
        </label>
        <button>New Canvas</button>
      </form>
    );
  }
}

export default NewCanvas;
