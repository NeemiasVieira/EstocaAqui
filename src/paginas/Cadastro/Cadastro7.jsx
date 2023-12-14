import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useCadastroContext } from "../../contextos/CadastroContext";
import { CadastroEmpresa } from "./CadastroStyles";

const Cadastro7 = () => {
  const { grupo, usuario } = useCadastroContext();

  return (
    <CadastroEmpresa>
    <h1>EstocaAqui - Cadastro</h1>
      <form>
        <h2>Cadastro realizado com sucesso</h2>
        <FontAwesomeIcon icon={faSquareCheck} className="checkFinal"/>
        <h3>Seja bem vindo {usuario.nome}</h3>
        <p>Nós da EstocaAqui agradecemos a confiança, vamos alavancar esse negócio juntos!</p>
        <p>#pracima {grupo.nome_fantasia}</p>
        <div className="BotoesProximoVoltar">

        <Link to="/">Ir para Login</Link>
        </div>
      </form>
    </CadastroEmpresa>
  );
};

export default Cadastro7;
