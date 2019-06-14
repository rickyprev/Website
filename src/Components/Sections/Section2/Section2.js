  
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
        let projects = [
			{
				title: "Shuttler App",
				logo: Shuttler,
				color: "#f2014b",
				size:"250px",
				link: "https://www.psushuttle.com/",
				description:
					"This application is developed to help hundreds of students on campus to track the location of the campus shuttle. It helps save student time by notifying them exactly when the shuttle reaches the location they specified in their preferences."
			},
			{
				title: "DeliverIt App",
				logo: DeliverIt,
				color: "#f9b448",
				size:"250px",
				link: "https://github.com/PSUCoders/DeliverIt",
				description:
					"A campus solution to help deliver groceries and other college student needs as a mobile app."
			},
			{
				title: "FindIt App",
				logo: FindIt,
				color: "#1d9f9e",
				size:"250px",
				link: "http://finditapp.biz/",
				description:
					"This application is developed to help hundreds of students on campus to track the location of the campus shuttle. It helps save student time by notifying them exactly when the shuttle reaches the location they specified in their preferences."
			}
			
		];
        return (
                
                <div className="sectionTwo">
                <div className="sectionTwoBackground">
                <h1 className="sectionTwoTitle">Portfolio</h1>
                    <div className="whiteBox">
                        
                            {/* <ProjectCard classname={projects.title} src={projects.source}  imageUrl={projects.source} description= "Web App" alt="empty" /> */}

                        {projects.map( (item,index)=>(

							<ProjectCard key={item.link} title={item.title} logo={item.logo} url={item.link} description={item.description}/>
						))}

					
               
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