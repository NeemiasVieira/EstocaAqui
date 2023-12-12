import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { CadastroMain } from "./CadastroStyle";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { MensagemDeErro } from "../../components/MensagemDeErro/MensagemDeErro";
import { Footer } from "../../components/Footer/Footer";
import { CadastroConcluido } from "../../components/CadastroConcluido/CadastroConcluido";
import { UserService } from "../../services/API/UserSerivice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faAt, faA } from "@fortawesome/free-solid-svg-icons";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const userService = new UserService(setResponse, setError);

  useEffect(() => {
    console.log(response);
  }, [response, error]);

  if (error) {
    console.log(error);
    return (
      <MensagemDeErro
        error={error.response.data.mensagem}
        mensagemBotao="Voltar"
        setError={setError}
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (response?.status === 201) return <CadastroConcluido />;

  const VerificaSenha = () => {
    if (senha1 === senha2) {
      return true;
    } else {
      return false;
    }
  };

  const Cadastrar = async (e) => {
    e.preventDefault();
    if (!VerificaSenha()) {
      setError({
        response: { data: { mensagem: "As senhas não correspondem" } },
      });
      return;
    }

    setIsLoading(true);
    await userService.cadastrarNovoUsuario(nome, email, senha1);
    setIsLoading(false);
  };

  return (
    <>
      <CadastroMain>
        <Navigation />
        <h1>Sistema de Monitoramento de Solo</h1>
        <h2>Cadastro</h2>

        <form type="submit" onSubmit={(e) => Cadastrar(e)}>
          <label htmlFor="">Nome</label>
          <div className="divInput">
            <div className="divIcon"><FontAwesomeIcon icon={faA} /></div>
            <input
              type="text"
              placeholder="Digite o seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </div>
          <label htmlFor="">E-mail</label>
          <div className="divInput">
            <div className="divIcon"><FontAwesomeIcon icon={faAt} /></div>
            <input
              type="text"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <label htmlFor="">Senha</label>
          <div className="divInput">
            <div className="divIcon"><FontAwesomeIcon icon={faKey} /></div>
            <input
              type="password"
              placeholder="Digite a sua senha"
              value={senha1}
              onChange={(e) => setSenha1(e.target.value)}
            />
          </div>
          <label htmlFor="">Confirmar Senha</label>
          <div className="divInput">
            <div className="divIcon"><FontAwesomeIcon icon={faKey} /></div>
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={senha2}
              onChange={(e) => {
                setSenha2(e.target.value);
              }}
            />
          </div>
          <button className="botaoCadastrar" onClick={(e) => Cadastrar(e)}>
            Cadastrar
          </button>
          <div className="sugestaoCadastro">
            <p>Já possui cadastro?</p>
            <Link to="/login" className="jaPossuiCadastro">
              Faça Login
            </Link>
          </div>
        </form>
      </CadastroMain>
      <Footer />
    </>
  );
};

export default Cadastro;