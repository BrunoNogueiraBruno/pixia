import "../styles/Canvas.css";
import React, { Component } from "react";
import Header from "../components/Header";
import Canvas from "../components/Canvas";
import ToolBar from "../components/ToolBar";

class CanvasPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="canvas-container">
          <div className="canvas-content">
            <Canvas />
          </div>
          <ToolBar />
        </div>
      </div>
    );
  }
}

export default CanvasPage;
