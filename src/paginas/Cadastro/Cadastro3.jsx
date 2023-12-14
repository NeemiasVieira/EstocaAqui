import React from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { useCadastroContext } from "../../contextos/CadastroContext";
import { CadastroEmpresa } from "./CadastroStyles";

const Cadastro3 = () => {
  const { usuario, setNome, setCpf } = useCadastroContext();

  return (
    <CadastroEmpresa>
    <h1>Dados do Usuário</h1>
      <form>
        <label htmlFor="">Nome</label>
        <div className="divInput">
          <div className="divIcon">
            <FontAwesomeIcon icon={faFont} />
          </div>
          <input
            type="text"
            placeholder="Digite o seu nome"
            value={usuario.nome}
            onChange={(e) => {
                setNome(e.target.value);
            }}
          />
        </div>
        <label htmlFor="">CPF</label>
        <div className="divInput">
          <div className="divIcon">
            <FontAwesomeIcon icon={faAddressCard} />
          </div>
          <input
            type="text"
            placeholder="Digite o seu CPF"
            value={usuario.cpf}
            onChange={(e) => {
              setCpf(e.target.value);
            }}
          />
        </div>
        
        <div className="BotoesProximoVoltar">
          <Link to="/cadastro/2">Voltar</Link>
          <Link to="/cadastro/4">Próximo</Link>
        </div>
      </form>
    </CadastroEmpresa>
  );
};

export default Cadastro3;
