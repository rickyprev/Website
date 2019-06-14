  
import React, { Component, Fragment } from 'react';

import './languageContainer.css';


class LanguageContainer extends Component {
    constructor(props) {
		super(props);


	}

    render() {

        return (
                
            <div className="container">
            <div className="Title">
                <h2>{this.props.title}</h2><hr></hr>
            </div>
            
            
          </div> 
                
               
        );
    }
}

export default LanguageContainer;