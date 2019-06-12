  
import React, { Component, Fragment } from 'react';
import './Section2.css';
import ProjectCard from "../../ProjectCard/ProjectCard.js";
import Shuttler from "../../../../Assets/shuttlerLogo.png";

class Section2 extends Component {
    constructor(props) {
		super(props);

		this.projects = [
			{
				title: "Shuttler App",
				color: "#E50914",
				link: "https://www.psushuttle.com/",
				description:
					"This application is developed to help hundreds of students on campus to track the location of the campus shuttle. It helps save student time by notifying them exactly when the shuttle reaches the location they specified in their preferences."
            },
            {
				title: "DeliverIt App",
				color: "#E50914",
				link: "https://github.com/PSUCoders/DeliverIt",
				description:
					"A campus solution to help deliver groceries and other college student needs as a mobile app."
            }
            
		];
	}

    render() {

        return (
                <div className="sectionTwo">
                    <div className="whiteBox">
                    <ProjectCard projectName="Shuttler" imageUrl={Shuttler} description= "Web App">
                    </ProjectCard>
                    <ProjectCard projectName="DeliverIt" imageUrl={Shuttler} description= "Web App">
                    </ProjectCard>
                    <ProjectCard projectName="Shuttler" imageUrl={Shuttler} description= "Web App">
                    </ProjectCard>
                    </div>
                </div>
        );
    }
}

export default Section2;