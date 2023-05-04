import React from "react";
import {Routes, Route} from 'react-router-dom';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Navbar from "./Navbar";

function App(){
    return(<>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
    </>)
}

function Page404(){
    return(<>
        404 Page Not Found
    </>)
};

export default App;