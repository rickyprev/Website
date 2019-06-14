  
import React, { Component, Fragment } from 'react';
import './Section1.css';
import PSU from "../../../../Assets/psuLogo.png";

class Section2 extends Component {
    constructor(props) {
		super(props);


	}

    render() {
  
        return (
                <div className="Section1Wrapper">
            <div className="header">
    
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
            </div> 
                
               
        );
    }
}

export default Section2;