
import classNames from "classnames";
import React from "react";
import Profile from "./profile";
const subash={"image":"https://spsk.freevar.com/index.html/Bcapic%20(2).jpg",
   "name":"Subash Prasad",
   "content":"Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
}

//css

const Comman='w-1/4 h-1/4 p-10 shadow-lg shadow-slate-200 border-b-2 border-t-2 border-sky-700';

const tailwindCss=classNames(
    Comman
);
// stories for profile
export default {
    title:'Profile',
    components:Profile
}
export function smProfile(){
    return(
       <Profile Data={subash} css={tailwindCss} text="sm"/>
    )
};
export function mdProfile(){
    return(
       <Profile Data={subash} css={tailwindCss} text="lg"/>
    )
};
export function lgProfile(){
    return(
        
       <Profile Data={subash} css={tailwindCss} text="2xl"/>
    )
};



