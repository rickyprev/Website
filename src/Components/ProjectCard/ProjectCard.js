  
import React, { Component} from 'react';
import './ProjectCard.css';


class ProjectCard extends Component{

	constructor(props) {
		super(props);
		this.state = {
		
	}
	
};


	

	render(){
		const projects = [
			{
				title: "Shuttler App",
				source: require("../../../Assets/shuttlerLogo.png"),
				color: "#E50914",
				link: "https://www.psushuttle.com/",
				description:
					"This application is developed to help hundreds of students on campus to track the location of the campus shuttle. It helps save student time by notifying them exactly when the shuttle reaches the location they specified in their preferences."
			},
			{
				title: "DeliverIt App",
				source: require("../../../Assets/deliverItLogo.png"),
				color: "#E50914",
				link: "https://github.com/PSUCoders/DeliverIt",
				description:
					"A campus solution to help deliver groceries and other college student needs as a mobile app."
			},
			{
				title: "FindIt App",
				source: require("../../../Assets/findItLogo.png"),
				color: "#E50914",
				link: "http://finditapp.biz/",
				description:
					"This application is developed to help hundreds of students on campus to track the location of the campus shuttle. It helps save student time by notifying them exactly when the shuttle reaches the location they specified in their preferences."
			}
			
		];
		return(
			<div className="projectCardWrapper">
			<div className="projectCardImage" >
				{
					projects.map(projects=>
						<img classname={projects.title} src={projects.source}  alt="empty" />

					)
				}
				
			</div>
	
		
	
		</div>

		);
	}
	
}




export default ProjectCard;