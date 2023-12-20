import React from "react";
import { Navigate } from "react-router-dom";


 const Auth = ({children}) => {

    const tokenValido = localStorage.getItem("tokenValido");
    return tokenValido === "true" ? children : <Navigate to="/login"/>

}

export default Auth;