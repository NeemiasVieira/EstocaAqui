import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faSquarePhone, faKey } from "@fortawesome/free-solid-svg-icons";
import { useCadastroContext } from "../../contextos/CadastroContext";
import { CadastroEmpresa } from "./CadastroStyles";

const Cadastro4 = () => {
  const { usuario, setEmail, setTelefone, setSenha } = useCadastroContext();

  return (
    <CadastroEmpresa>
    <h1>Dados do Usuário</h1>
      <form>
        <label htmlFor="">E-mail</label>
        <div className="divInput">
          <div className="divIcon">
            <FontAwesomeIcon icon={faAt} />
          </div>
          <input
            type="text"
            placeholder="Digite o seu e-mail"
            value={usuario.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <label htmlFor="">Telefone</label>
        <div className="divInput">
          <div className="divIcon">
            <FontAwesomeIcon icon={faSquarePhone} />
          </div>
          <input
            type="text"
            placeholder="Digite o seu telefone"
            value={usuario.telefone}
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
          />
        </div>
        <label htmlFor="">Senha</label>
        <div className="divInput">
          <div className="divIcon">
            <FontAwesomeIcon icon={faKey} />
          </div>
          <input
            type="password"
            placeholder="Digite a sua senha"
            value={usuario.senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </div>
        <div className="BotoesProximoVoltar">
          <Link to="/cadastro/3">Voltar</Link>
          <Link to="/cadastro/5">Próximo</Link>
        </div>
      </form>
    </CadastroEmpresa>
  );
};

export default Cadastro4;
