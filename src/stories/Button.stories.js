import React from "react";
import Button from './Button';

export default{
    title:'Button',
    component: Button
}

// for primary button
export function Primary(){
    return(
        <Button variant="primary">PRIMARY</Button>
    );
}

// for danger button

export function Danger(){
    return(
        <Button variant="danger">DANGER</Button>
    )
};

// for success button

export function Success(){
    return(
        <Button variant="success">SUCCESS</Button>
    )
}
 
