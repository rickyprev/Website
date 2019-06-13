  
import React, { Component, Fragment } from 'react';
import './Section2.css';
import ProjectCard from "../../ProjectCard/ProjectCard.js";
import Shuttler from "../../../../Assets/shuttlerLogo.png";
import DeliverIt from "../../../../Assets/deliverItLogo.png";
import FindIt from "../../../../Assets/findItLogo.png";

class Section2 extends Component {
    constructor(props) {
		super(props);


	}

    render() {

        return (
                <div className="sectionTwo">
                <div className="sectionTwoBackground">
                <h1 className="sectionTwoTitle">Portfolio</h1>
                    <div className="whiteBox">
                    <ProjectCard className="Shuttler" projectName="Shuttler" imageUrl={Shuttler} description= "Web App" >
                    </ProjectCard>
               
                    </div>
                    </div>
                    <div className="sectionTwoText">

                    <p className="sectionTwoPText">This is where the dynamic text goes.</p>


                    </div>
                </div>
        );
    }
}

export default Section2;