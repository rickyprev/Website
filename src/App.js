import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/NavBar";
import Section2 from "./Components/Sections/Section2/Section2";
import PSU from "../Assets/psuLogo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="nameIntro">
            <h2>
              Hello, I'm <span>Keith Prevost</span>
            </h2>
            <h2>I'm a Software Developer</h2>
          </div>
       
        </div>
        <div className="Section1Text">
        <div className="section1ColLeft">

        <h2>I'm recent graduate from SUNY Plattsburgh with a B.S 
      in Computer Science. I have a range of exposure in 
      software engineering, network infrastructure, computer 
      security, and military environments. I’m currently looking 
      to be employed and put the skills I’ve obtained 
       thus far to the test.</h2>
        </div>
        <div className="section1ColRight">

      <a href="https://www.plattsburgh.edu/">

      <img src={PSU} className="sunyLogo" width="500px"></img>
      </a>
        </div>
        </div>
     
        <div className="Section2">
        <Section2></Section2>

          
        </div>
      </div>
    );
  }
}

export default App;
