import React from "react";
import {BrowserRouter,Routes, Route } from 'react-router-dom';

import Registro from "./components/Forms/index.jsx";
import Dash from "./pages/Dash/index.jsx";
import Editar from "./pages/editar/index.jsx";
export default function Rotas(){
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<Registro/>}/>
                <Route path="/dash" element={<Dash/>}/>
                <Route path="/dash/edit/:id" element={<Editar/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}