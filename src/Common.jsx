import React from "react";
import { NavLink } from "react-router-dom";

function Common(props){
    return(<>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                            <h1>{props.main.discription}<strong className="brand-name">{props.main.highlight}</strong></h1>
                            <h2 className="my-3">
                                {props.discription}
                            </h2>
                            <div className="mt-3">
                                <NavLink to="/services" className="btn-get-started">
                                    Get started
                                </NavLink>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="Image Not Found"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Common;