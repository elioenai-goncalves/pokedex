import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokedex } from "./home/pokedex";
import { PokeDetails } from "./home/pokemon-details";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Pokedex />} />
            <Route exact path="/pokemon/:id" element={<PokeDetails />} />
        </Routes>
    </BrowserRouter>
)
