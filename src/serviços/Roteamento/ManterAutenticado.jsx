import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { validaToken } from "./auth";

const ManterAutenticado = ({children}) => {
    const usuarioJaAutenticado = localStorage.getItem("tokenValido");

    useEffect(() => {

        if(usuarioJaAutenticado !== true){
            validaToken();
        }

    }, []);

    const tokenValido = localStorage.getItem("tokenValido");
    return tokenValido ? <Navigate to="/homepage1"/> : children
}

export default ManterAutenticado;