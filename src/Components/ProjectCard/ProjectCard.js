  
import React, { Component} from 'react';
import './ProjectCard.css';



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
				<img classname={this.props.url} src={this.props.logo} height={this.props.size} alt="empty" />
				
				}
			</div>
	
		
	
		</div>

		);
	}
	
}




export default ProjectCard;