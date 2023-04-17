import React, { Component } from "react";
import Analyzer from "./components/analyzer";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Reference from "./components/reference";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Intro />
          <Analyzer />
          <Reference />
        </div>
      </>
    );
  }
}

export default App;
