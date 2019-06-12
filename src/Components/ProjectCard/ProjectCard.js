  
import React, { Component, Fragment } from 'react';
import './ProjectCard.css';


const ProjectCard= props => (
	<div className="projectCardWrapper">
		<div className="projectCardImage" >
			<img classname="theImage" src={props.imageUrl}  alt="" />
			
		</div>

	

	</div>
);


export default ProjectCard;