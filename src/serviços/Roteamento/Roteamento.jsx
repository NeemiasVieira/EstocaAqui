import { HashRouter, Routes, Route} from "react-router-dom";
import Login from "../../paginas/Login/Login";
import React from "react";
import { Auth } from "./auth";

export const RouterDOM = () => {
    return(
    <HashRouter>
    <Routes>
        <Route index element={<Login/>} path="/"/>

    </Routes>
    </HashRouter>
    )
}