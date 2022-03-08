import React from "react";
import {BrowserRouter,Routes, Route } from 'react-router-dom';

import Registro from "./components/Forms/index.jsx";
import Dash from "./components/Dash/index.jsx";

export default function Rotas(){
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Registro/>}/>
                <Route path="/dash" element={<Dash/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}