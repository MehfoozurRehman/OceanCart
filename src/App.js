import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
