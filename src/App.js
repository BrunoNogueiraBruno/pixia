import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path={"/"} component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
