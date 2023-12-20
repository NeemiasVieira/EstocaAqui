import React, {useState} from "react";
import { NavegacaoStyle } from "./NavegacaoStyle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navegacao = ({loginValido}) => {
    const usuarioLogado = localStorage.getItem('nome'); //pegando o nome do usuário
    { loginValido: Boolean = true; }
    const [mostrarOpcoesMovimentacoes, setMostrarOpcoesMovimentacoes] = useState(false);
    const toggleOpcoesMovimentacoes = () => {
        setMostrarOpcoesMovimentacoes(!mostrarOpcoesMovimentacoes);
    }
    const handleOpcaoClick = () => {
        // Adicione aqui qualquer lógica que você queira executar ao clicar nas opções
        // Por exemplo, você pode navegar para a página correspondente
      };
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("tokenValido");
        localStorage.removeItem("token");
        localStorage.removeItem("nome");
        localStorage.removeItem("userID");
        navigate("/");
    }
    return(
        <NavegacaoStyle>
            {loginValido && (
                <>
                <ul className="navegacao">
                    <li><Link to="/homepage"> <img src="https://th.bing.com/th/id/OIG.tkoihjNKBXNqhteoSADp?w=1024&h=1024&rs=1&pid=ImgDetMain"></img></Link></li>
                    <li><Link to="/"> Estoque </Link></li>
                    <li><Link to="/"> Movimentações</Link></li>
                    <li><Link to="/produtos"> Produtos </Link></li>
                    <li><Link to="/"> Fornecedores </Link></li>
                    <div className="login">
                        <li 
                            className="dropdown"
                        >
                        <span onClick={toggleOpcoesMovimentacoes} className="dropli">
                            {usuarioLogado} 
                            <FontAwesomeIcon icon={faBars} className="icone"/>
                            {/* <i className="fa fa-caret-down"></i> */}
                            {/* {mostrarOpcoesMovimentacoes ? '▲' : '▼'} */}
                        </span>
                        {mostrarOpcoesMovimentacoes &&(
                            <div className="dropdown-content" onClick={(e)=>e.stopPropagation()} style={{ display: mostrarOpcoesMovimentacoes ? 'block' : 'none' }}>
                                <ul>       
                                    <li><Link to="/configurações" onClick={handleOpcaoClick}> Configurações</Link></li>
                                    <li><Link to="/login" onClick={handleLogout}>
                                    Deslogar</Link></li>   
                                </ul>
                            </div>
                        )}
                        </li>
                    </div>
                </ul>
                </>
            )}
            {!loginValido && (
            <ul className="navegacao">
                <li><Link to="/">Pagina Inicial</Link></li>
                <li><Link to="/">Funcionamento</Link></li>
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">Sobre nós</Link></li>
                <li className="login"><Link to="/login">Login</Link></li>
            </ul>
            )}
        </NavegacaoStyle>
    )
}

