  
import React, { Component, Fragment } from 'react';
import './Section2.css';
import ProjectCard from "../../ProjectCard/ProjectCard.js";
import Shuttler from "../../../../Assets/shuttlerLogo.png";
import DeliverIt from "../../../../Assets/deliverItLogo.png";
import FindIt from "../../../../Assets/findItLogo.png";

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
            },
            {
				title: "FindIt App",
				color: "#E50914",
				link: "http://finditapp.biz/",
				description:
					"This application is developed to help hundreds of students on campus to track the location of the campus shuttle. It helps save student time by notifying them exactly when the shuttle reaches the location they specified in their preferences."
            }
            
		];
	}

    render() {

        return (
                <div className="sectionTwo">
                <div className="sectionTwoBackground">
                <h1 className="sectionTwoTitle">Portfolio</h1>
                    <div className="whiteBox">
                    <ProjectCard className="Shuttler" projectName="Shuttler" imageUrl={Shuttler} description= "Web App" >
                    </ProjectCard>
                    <ProjectCard className="DeliverIt" projectName="DeliverIt" imageUrl={DeliverIt} description= "Web App">
                    </ProjectCard>
                    <ProjectCard className="FindIt" projectName="Shuttler" imageUrl={FindIt} description= "Web App">
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