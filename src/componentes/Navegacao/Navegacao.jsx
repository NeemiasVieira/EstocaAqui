import React from "react";
import { NavegacaoStyle } from "./NavegacaoStyle";
import { Link } from "react-router-dom";


export const Navegacao = () => {


    return(
    
        <NavegacaoStyle>
            <ul className="navegacao">
                <li><Link to="/">Pagina Inicial</Link></li>
                <li><Link to="/">Funcionamento</Link></li>
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">Sobre nós</Link></li>
                <li className="login"><Link to="/login">Login</Link></li>
            </ul>
        </NavegacaoStyle>
        
    )
}

