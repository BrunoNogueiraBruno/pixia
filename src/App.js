import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import CanvasPage from "./pages/CanvasPage";
import Context from "./components/Context";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      canvas: {
        title: "untitled",
        width: undefined,
        height: undefined,
      },
      interface: {
        zoom: 20,
        selectedColor: "black",
      },
    };
    this.setCanvas = this.setCanvas.bind(this);
    this.setPredefined = this.setPredefined.bind(this);
    this.setInterface = this.setInterface.bind(this);
  }

  setCanvas(key, value) {
    this.setState({ ...this.state, canvas: { ...this.state.canvas, [key]: value } });
  }

  setPredefined(width, height) {
    this.setState({ ...this.state, canvas: { ...this.state.canvas, width, height } });
  }

  setInterface(key, value) {
    this.setState({ ...this.state, interface: { ...this.state.interface, [key]: value } });
  }

  render() {
    const value = {
      state: this.state,
      setCanvas: this.setCanvas,
      setPredefined: this.setPredefined,
      setInterface: this.setInterface,
    }
    return (
      <Context.Provider value={value}>
        <BrowserRouter>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/canvas"} component={CanvasPage} />
        </BrowserRouter>
      </Context.Provider>
    );
  }
}

export default App;
