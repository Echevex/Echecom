import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/*<Route exact path="/" component={Mens} />
        <Route exact path="/" component={Womens} />
        <Route component={PageNotFound} />*/}
      </Switch>
    </Router>
  );
}

export default App;
