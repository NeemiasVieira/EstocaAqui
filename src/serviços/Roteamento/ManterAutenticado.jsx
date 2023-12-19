import React from "react";
import { Navigate } from "react-router-dom";

const ManterAutenticado = ({children}) => {

    const tokenValido = localStorage.getItem("tokenValido");
    return tokenValido === "true" ? <Navigate to="/homepage1"/> : children;
}

export default ManterAutenticado;