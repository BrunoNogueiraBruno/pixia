import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Canvas from "./pages/Canvas";
import Context from "./components/Context";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      canvas: {
        title: "undefined",
        width: "",
        height: "",
      }
    };
    this.setCanvas = this.setCanvas.bind(this);
    this.setPredefined = this.setPredefined.bind(this);
  }

  setCanvas(key, value) {
    this.setState({ ...this.state, canvas: { ...this.state.canvas, [key]: value } });
  }

  setPredefined(width, height) {
    this.setState({ ...this.state, canvas: { ...this.state.canvas, width, height } });
  }

  render() {
    const value = {
      state: this.state,
      setCanvas: this.setCanvas,
      setPredefined: this.setPredefined,
    }
    return (
      <Context.Provider value={value}>
        <BrowserRouter>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/canvas"} component={Canvas} />
        </BrowserRouter>
      </Context.Provider>
    );
  }
}

export default App;
