  
import React, { Component} from 'react';
import './ProjectCard.css';
import Shuttler from "../../../Assets/shuttlerLogo.png";
import DeliverIt from "../../../Assets/deliverItLogo.png";


class ProjectCard extends Component{

	constructor(props) {
		super(props);
		this.state = {
			

		
	}
	
};


	

	render(){
		
		return(
			<div className="projectCardWrapper">
			<div className="projectCardImage" >
				{
				<img classname={this.props.url} src={this.props.logo}  alt="empty" />

				
				}
				{/* <p>{this.props.url}</p> */}
			</div>
	
		
	
		</div>

		);
	}
	
}




export default ProjectCard;