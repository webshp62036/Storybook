import React from "react";
import Box from "./Box";

export default {
    title:'Box',
    component:Box
}
export function OrangeBox(){
    return(
        <Box color="orange">Orange</Box>
    )
};
export function RedBox(){
    return(
        <Box color="red">Red </Box>
    )
};

export function OrangeredBox(){
    return(
        <Box color="orangered">OrangeredBox</Box>
    )
};