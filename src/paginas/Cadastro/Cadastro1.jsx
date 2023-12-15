import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faFileSignature, faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";
import { useCadastroContext } from "../../contextos/CadastroContext";
import { CadastroEmpresa } from "./CadastroStyles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Cadastro1 = () => {
  const { grupo, setCnpj, setRazaoSocial, setNomeFantasia } = useCadastroContext();
  const [erro, setErro] = useState();
  const [cnpjValido, setCnpjValido] = useState(true);
  const navigate = useNavigate();

  const formatarCnpj = (cnpj) => {
    // Remove caracteres não numéricos
    const cnpjLimpo = cnpj.replace(/\D/g, '');

    // Formatação dinâmica
    let cnpjFormatado = '';

    for (let i = 0; i < cnpjLimpo.length; i++) {
      if (i === 2 || i === 5) {
        cnpjFormatado += '.'; // Adiciona ponto após o segundo e quinto dígitos
      } else if (i === 8) {
        cnpjFormatado += '/'; // Adiciona barra após o oitavo dígito
      }

      cnpjFormatado += cnpjLimpo[i];
    }

    if (cnpjLimpo.length > 12) {
      cnpjFormatado = `${cnpjFormatado.substring(0, 15)}-${cnpjFormatado.substring(15)}`;
    }

    return cnpjFormatado;
  };

  const onChangeCNPJ = (e) => {
    const novoCnpj = e.target.value;
    const cnpjFormatado = formatarCnpj(novoCnpj);
    setCnpj(cnpjFormatado);

    // Validação ao completar o CNPJ
    if (novoCnpj.length === 18) {
      setCnpjValido(validarCNPJ(novoCnpj));
    } else {
      setCnpjValido(true); // Reinicia a validação se o CNPJ não estiver completo
    }
  };

  const validarCNPJ = (cnpj) => {
    if(cnpj.length === 18) return true
    else return false;
  };

  const botaoProximo = (e) => {
    e.preventDefault();

    if(validarCNPJ(grupo.cnpj) && grupo.nome_fantasia.length > 2 && grupo.razao_social.length > 5){
      setErro(null);
      navigate("/cadastro/2");
      return
    }

    setErro("Todos os campos precisam estar preenchidos corretamente");

  }

  return (
    <CadastroEmpresa>
    <h1>Dados da Empresa</h1>
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
            maxLength={18}
            onChange={(e) => {
              onChangeCNPJ(e)
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
        {erro && (<p className="mensagemDeErro">{erro}</p>)}
        <div className="BotoesProximoVoltar">
          <button className="ButtonLink" onClick={(e) => botaoProximo(e)}>Próximo</button>
        </div>
        <div className="sugestaoLogin">
            <p>Já tem cadastro?</p>
            <Link to="/login" className="facaLogin">
              Faça login
            </Link>
          </div>
      </form>
    </CadastroEmpresa>
  );
};

export default Cadastro1;
