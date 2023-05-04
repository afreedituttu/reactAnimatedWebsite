import React from "react";
import poster from './images/first.png';
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = ()=>{
    return(<>
    <Common main={{'discription':'From About','highlight':'Afreedi'}} imgsrc={poster} discription='From About Description' />
    </>)
}

export default About;