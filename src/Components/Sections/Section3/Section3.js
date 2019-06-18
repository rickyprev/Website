  
import React, { Component, Fragment } from 'react';
import './Section3.css';
import LanguageContainer from "../../LanguageContainer/languageContainer";
import cPlusPlusLogo from "../../../../Assets/c++Logo.svg";


class Section2 extends Component {
    constructor(props) {
		super(props);


	}

    render() {
        let proficient=[
            {
                name:"C++",
                logo:cPlusPlusLogo,
                size:"150"
            },
            // {
            //     name:"C#",
            //     logo:""
            // },
            // {
            //     name:"HTML",
            //     logo:""
            // },
            // {
            //     name:"CSS",
            //     logo:""
            // },
            // {
            //     name:"Python",
            //     logo:""
            // },
            // {
            //     name:"ReactJs",
            //     logo:""
            // },
            ];
        
        return (
                
                <div className="sectionThree">
                <h1 className="sectionThreeTitle">Languages</h1>
                <LanguageContainer className="Proficient"  title="Proficient"
               list={proficient}></LanguageContainer>
                <LanguageContainer className="Prior Experience" title="Prior Experience"
               ></LanguageContainer>


                </div>
                
               
        );
    }
}

export default Section2;