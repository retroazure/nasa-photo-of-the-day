import React from 'react';
import DataDisplay from './dataDisplay';

const ButtonComponent = (props) => {
    
    const whenClicked = ()=> {

        const test = document.querySelectorAll(".display-data"); 
        for(let i=0; i<test.length;i++){

        test[i].style.display = "block";
    }
        
        console.log("Trying");

    }

    return (
        <button className="buttonComponent" onClick={whenClicked}>Click Me</button>
    );
}

export default ButtonComponent;