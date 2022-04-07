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
export function orange(){
    return(
<Button size="sm" textColor="blue" bgColor="blue-500">Enable</Button>
    );
    };

