import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/dashboard/Dashboard";
import Form from "./Components/form/Form";
import Header from "./Components/header/Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="body-content">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/new-product-form" component={Form} />
              <Route exact path="/edit-product-form/:id" component={Form} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
