import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faSquarePhone, faKey } from "@fortawesome/free-solid-svg-icons";
import { useCadastroContext } from "../../contextos/CadastroContext";
import { CadastroEmpresa } from "./CadastroStyles";

export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validarSenha = (senha) => {
  // Pelo menos 8 caracteres, uma letra maiúscula, um caractere especial e um número
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  return regex.test(senha);
};


const Cadastro4 = () => {
  const { usuario, setEmail, setTelefone, setSenha } = useCadastroContext();
  const [senhaValida, setSenhaValida] = useState(false);
  const [emailValido, setEmailValido] = useState(false);
  const [erro, setErro] = useState();
  const navigate = useNavigate();

  const botaoProximo = (e) => {
    e.preventDefault();

    if(senhaValida && emailValido){
      setErro(null);
      navigate("/cadastro/5");
      return;
    }

    if(!emailValido){
      setErro("O e-mail deve ser valido")
      return;
    }

    if(!senhaValida){
      setErro("A senha precisa conter 8 caracteres, um caractere especial, uma maiuscula e uma minuscula");
      return;
    }

  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailValido(validarEmail(usuario.email));
  }

  const onChangeSenha = (e) => {
    setSenha(e.target.value);
    setSenhaValida(validarSenha(e.target.value));
  }

  useEffect(() => {
    setEmailValido(validarEmail(usuario.email));
    setSenhaValida(validarSenha(usuario.senha));
  }, []);

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
              onChangeEmail(e);
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
              onChangeSenha(e);
            }}
          />
        </div>
        {erro && (<p className="mensagemDeErro">{erro}</p>)}
        <div className="BotoesProximoVoltar">
          <Link to="/cadastro/3">Voltar</Link>
          <button className="ButtonLink" onClick={(e) => botaoProximo(e)}>Próximo</button>
        </div>
      </form>
    </CadastroEmpresa>
  );
};

export default Cadastro4;
