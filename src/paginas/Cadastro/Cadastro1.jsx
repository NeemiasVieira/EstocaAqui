import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faFileSignature, faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";
import { useCadastroContext } from "../../contextos/CadastroContext";
import { CadastroEmpresa } from "./CadastroStyles";

const Cadastro1 = () => {
  const { grupo, setCnpj, setRazaoSocial, setNomeFantasia } = useCadastroContext();

  return (
    <CadastroEmpresa>
    <h1>EstocaAqui - Cadastro</h1>
      <form>
        <label htmlFor="">CNPJ</label>
        <div className="divInput">
          <div className="divIcon">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <input
            type="text"
            placeholder="Digite o CNPJ da sua empresa"
            value={grupo.cnpj}
            onChange={(e) => {
              setCnpj(e.target.value);
            }}
          />
        </div>
        <label htmlFor="">Razão Social</label>
        <div className="divInput">
          <div className="divIcon">
            <FontAwesomeIcon icon={faFileSignature} />
          </div>
          <input
            type="text"
            placeholder="Digite a razão social da sua empresa"
            value={grupo.razao_social}
            onChange={(e) => {
              setRazaoSocial(e.target.value);
            }}
          />
        </div>
        <label htmlFor="">Nome Fantasia</label>
        <div className="divInput">
          <div className="divIcon">
            <FontAwesomeIcon icon={faArrowDownAZ} />
          </div>
          <input
            type="text"
            placeholder="Digite o nome fantasia da sua empresa"
            value={grupo.nome_fantasia}
            onChange={(e) => {
              setNomeFantasia(e.target.value);
            }}
          />
        </div>
        <div className="BotoesProximoVoltar">
          <Link>Voltar</Link>
          <Link to="/cadastro/2">Próximo</Link>
        </div>
      </form>
    </CadastroEmpresa>
  );
};

export default Cadastro1;
