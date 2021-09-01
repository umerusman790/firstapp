import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login-page/login";
import Dashboard from "./DashBoard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="parent">
            <div className="container">
              <Login />
            </div>
          </div>
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
