import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch ,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/search">
            <SearchPage />
        </Route>
        <Route path="/">
            <Home />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// https://clone-a46ae.web.app/

// Project Console: https://console.firebase.google.com/project/clone-a46ae/overview

