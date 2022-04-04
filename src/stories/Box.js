import React from "react";
import './Box.css'

export default function Box(props){
    const{variant="orange",children,...rest}=props;
    return(
        <div className="Wrapper-Div">
            <div className={'box'}{...rest}>
                <p>
                    {children}
                    
                </p>
            </div>
        </div>
    )
}