  
import React, { Component, Fragment } from 'react';

import './NavBar.css';


class Section2 extends Component {
    constructor(props) {
		super(props);


	}

    render() {

        return (
                
            <div className="menuBar">
            <div className="homeLink">
              <h2 className="menuText">
                <ul className="homeList">
                <div className="nameIntro">
                <h2 className="nameIntro-text">Keith Prevost</h2>
                <h2 className="nameIntro-text-title">Software Engineer</h2><hr></hr>

                </div>

                  {/* <Link to="/" className="list"> */}
                    <li>Home</li>
                  {/* </Link> */}
                  {/* <Link to="/about" className="list"> */}
                    <li>Portfolio</li>
                  {/* </Link> */}
                  {/* <Link to="/contact" className="list"> */}
                    <li>Languages</li>
                  {/* </Link> */}
                </ul>
              </h2>
            </div>
          </div> //end menuBar div
                
               
        );
    }
}

export default Section2;