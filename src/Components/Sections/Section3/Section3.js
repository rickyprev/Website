  
import React, { Component, Fragment } from 'react';
import './Section3.css';
import LanguageContainer from "../../LanguageContainer/languageContainer";


class Section2 extends Component {
    constructor(props) {
		super(props);


	}

    render() {
        let proficient=[
        {
            name:"C++",
            logo:""
        },
        {
            name:"C#",
            logo:""
        },
        {
            name:"HTML",
            logo:""
        },
        {
            name:"CSS",
            logo:""
        },
        {
            name:"Python",
            logo:""
        },
        {
            name:"ReactJs",
            logo:""
        },
        ];
        let priorExperience=[
            {
                name:"SQL",
                logo:""
            },
            {
                name:"MongoDB",
                logo:""
            },
            {
                name:"Flutter",
                logo:""
            },
            {
                name:"Javascript",
                logo:""
            },
            {
                name:"Java",
                logo:""
            },
            {
                name:"C",
                logo:""
            },
            ];
   
    
        return (
                
                <div className="sectionThree">
                <h1 className="sectionThreeTitle">Languages</h1>
                <LanguageContainer className="Proficient"  title="Proficient"
                list={proficient}></LanguageContainer>
                <LanguageContainer className="Prior Experience" title="Prior Experience"
                list={priorExperience}></LanguageContainer>


                </div>
                
               
        );
    }
}

export default Section2;