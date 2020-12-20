import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";

// Pages
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Tasks from "./components/pages/Tasks";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/tasks" component={Tasks} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
