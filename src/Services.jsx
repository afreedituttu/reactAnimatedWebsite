import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Card from "./Card";
import Apidata from "./Apidata";

const About = ()=>{
    return(<>
        <div className="my-5">
            <h1 className="tab-center">Our Services</h1>
        </div>
        <div className="container-fludi mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {Apidata.map((value, index)=>{
                            return <Card imgsrc={value.imgsrc} title={value.title} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default About;