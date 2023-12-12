import React from "react";
import { NavegacaoStyle } from "./NavegacaoStyle";
import { Link } from "react-router-dom";


export const Navegacao = () => {


    return(
    
        <NavegacaoStyle>
            <ul className="navegacao">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aplicacao">Aplicação</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li className="login"><Link to="/login">Login</Link></li>
            </ul>
        </NavegacaoStyle>
        
    )
}

