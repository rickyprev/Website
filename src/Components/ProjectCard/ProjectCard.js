  
import React, { Component, Fragment } from 'react';
import './ProjectCard.css';


const ProjectCard= props => (
	<div className="projectCardWrapper">
		<div className="projectCardImage">
			<img src={props.imageUrl} width="80%" alt="" />
		</div>

	

	</div>
);


export default ProjectCard;