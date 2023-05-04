import React from "react";
import poster from './images/second.png';
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = ()=>{
    return(<>
        <Common main={{'discription':'From Home','highlight':'Afreedi'}} imgsrc={poster} discription='From Home Description' />
    </>)
}

export default Home;