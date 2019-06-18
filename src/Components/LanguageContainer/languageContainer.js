  
import React, { Component, Fragment } from 'react';

import './languageContainer.css';
import LanguageBox from "../LanguageBox/LanguageBox";
import cPlusPlusLogo from "../../../Assets/c++Logo.svg";

class LanguageContainer extends Component {
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
            //     id:0,
            //     name:"C#",
            //     logo:""
            // },
            // {
            //     id:1,
            //     name:"HTML",
            //     logo:""
            // },
            // {
            //     id:2,
            //     name:"CSS",
            //     logo:""
            // },
            // {
            //     id:3,
            //     name:"Python",
            //     logo:""
            // },
            // {
            //     id:4,
            //     name:"ReactJs",
            //     logo:""
            // },
            ];
        //     let priorExperience=[
        //         {
        //             name:"SQL",
        //             logo:""
        //         },
        //         {
        //             name:"MongoDB",
        //             logo:""
        //         },
        //         {
        //             name:"Flutter",
        //             logo:""
        //         },
        //         {
        //             name:"Javascript",
        //             logo:""
        //         },
        //         {
        //             name:"Java",
        //             logo:""
        //         },
        //         {
        //             name:"C",
        //             logo:""
        //         },
        //         ];

       const names=proficient.map(name=>{

        return(

            <LanguageBox key={name.id} name={name}></LanguageBox>
        )
       });
       
       
        return (
                
            <div className="container">
            <div className="Title">

            
              {names}

            </div>
            
            
          </div> 
                
               
        );
    }
}

export default LanguageContainer;