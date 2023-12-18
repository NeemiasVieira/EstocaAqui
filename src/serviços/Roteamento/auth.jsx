import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import estoca_api from "../API/api";

const validaToken = async () => {

    const token = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };

    await estoca_api.get("/valida-token", token)
    .then(resposta => localStorage.setItem("tokenValido", resposta.data))
    .catch(localStorage.setItem("tokenValido", false));
}

 const Auth = ({children}) => {

    const usuarioJaAutenticado = localStorage.getItem("tokenValido");

    useEffect(() => {

        if(usuarioJaAutenticado !== true){
            validaToken();
        }

    }, []);

    const tokenValido = localStorage.getItem("tokenValido");
    return tokenValido ? children : <Navigate to="/login"/>

}

export default Auth;