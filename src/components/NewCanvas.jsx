import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "./Context";
import GetIcon from "./Icons";

class NewCanvas extends Component {
  static contextType = Context;

  constructor() {
    super();
    this.getOptions = this.getOptions.bind(this);
    this.getInput = this.getInput.bind(this);
  }

  getOptions(options) {
    let listOfOptions = [];
    options.forEach((opt) => {
      listOfOptions.push(
        <option key={opt} value={opt}>
          {opt}
        </option>
      );
    });
    return listOfOptions;
  }

  getInput(id, value, placeholder, type, func) {
    return (
      <input
        id={`${id}-input`}
        name={`${id}-input`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => func(id, e.target.value)}
      />
    );
  }

  render() {
    return (
      <Context.Consumer>
        {({
          setCanvas,
          setPredefined,
          state: {
            canvas: { title, width, height },
          },
        }) => {
          return (
            <form className="new-canvas-container">
              <div className="upper-bar">
                <label
                  htmlFor="title-input"
                  onClick={() => setCanvas("title", "")}
                >
                  {this.getInput("title", title, "________", "text", setCanvas)}
                </label>
              </div>

              <div className="dimension-input-container">
                <div>
                  <div>
                    <label htmlFor="width-input">
                      Width:
                      {this.getInput("width", width, "0", "number", setCanvas)}
                    </label>
                    <button
                      type="button"
                      className="arrow-rep-icon"
                      onClick={() =>
                        this.setState({ width: height, height: width })
                      }
                    >
                      <GetIcon name="arrowRepeatIcon" />
                    </button>
                    <label htmlFor="height-input">
                      Height:
                      {this.getInput(
                        "height",
                        height,
                        "0",
                        "number",
                        setCanvas
                      )}
                    </label>
                  </div>
                </div>
              </div>

              <label htmlFor="dimensionSelector">
                <span>Predefined:</span>
                <select
                  id="dimensionSelector"
                  onChange={(e) => {
                    const dimension = e.target.value.split("x");
                    setPredefined(dimension[0], dimension[1]);
                  }}
                >
                  <option hidden>Select...</option>
                  {this.getOptions(["16x16", "32x32", "64x64", "120x120"])}
                </select>
              </label>

              <Link to="/canvas">
                <button className="submitBtn" type="button">
                  New Canvas
                </button>
              </Link>
            </form>
          );
        }}
      </Context.Consumer>
    );
  }
}
NewCanvas.contextType = Context;

export default NewCanvas;
