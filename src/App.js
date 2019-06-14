import React, { Component } from "react";
import "./App.css";
import Section1 from "./Components/Sections/Section1/Section1";
import Section2 from "./Components/Sections/Section2/Section2";
import Section3 from "./Components/Sections/Section3/Section3";
import Navbar from "./Components/Navbar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
                  <Navbar className="navBar"></Navbar>

        <div className="Sections">
        <div className="Section1">
        <Section1></Section1>

        </div>
        <div className="Section2">
        <Section2></Section2>

        </div>
        <div className="Section3">
        <Section3></Section3>

        </div>
        </div> 
      </div>
    );
  }
}

export default App;
