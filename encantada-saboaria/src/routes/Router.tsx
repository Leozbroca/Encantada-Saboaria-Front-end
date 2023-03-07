import React from "react";
import { Routes, Route} from "react-router-dom";
import Contact from "../pages/contact/Contact";
import HomePage from "../pages/homepage/Homepage";

const Router = () => {
    return(
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contato" element={<Contact/>}/>
            </Routes>
    )
}

export default Router