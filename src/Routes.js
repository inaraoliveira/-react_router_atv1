import React from "react";
import { Home } from "./pages/Home";
import { Cidade } from "./pages/Cidade";
import { Musica } from "./pages/Musica";
import { Routes, Route } from "react-router-dom";


export const Rotas = () => {

    return(
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route  path='/Musica' element={<Musica />} />
                <Route  path='/Cidade' element={<Cidade />} />
            </Routes>
        </main>
    );
}