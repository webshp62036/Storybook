import React from "react";
import './Button.css';


// arrow function 
 export default function Button(props){
     const{variant='primary',children,...rest}=props;
    return(
        <button className={'button ${variant}'}  {...rest}>
            {children}
        </button>
    );
};