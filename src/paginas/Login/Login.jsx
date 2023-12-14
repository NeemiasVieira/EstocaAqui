import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginMain } from "./LoginStyle";
import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import { Loading } from "../../componentes/Loading/Loading";
import { MensagemDeErro } from "../../componentes/MensagemDeErro/MensagemDeErro";
import { UsuarioService } from "../../serviços/API/modulos/UsuarioSerivce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [resposta, setResposta] = useState();
  const [erro, setErro] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const usuarioSerivce = new UsuarioService(setResposta, setErro);
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await usuarioSerivce.login(email, senha);
    setIsLoading(false);
  };

  useEffect(() => {console.log(resposta)}, [resposta, erro]);

  if (erro)
    return (
      <MensagemDeErro
        error={erro.response?.data.mensagem}
        mensagemBotao="Voltar"
        setError={setErro}
      />
    );

  if (isLoading) return <Loading/>

  if (resposta?.status === 200) {
    localStorage.setItem("token", resposta.data.token);
    localStorage.setItem("nome", resposta.data.usuario.nome);
    localStorage.setItem("userID", resposta.data.usuario.id);
    navigate("/sistema/home");
  }

  return (
    <>
      <LoginMain>
        <Navegacao/>
        <h1>EstocaAqui - Cadastro</h1>
        <h2>Login</h2>

        <form type="submit">
          <label htmlFor="">Usuário</label>
          <div className="divInput">
            <div className="divIcon">
              <FontAwesomeIcon icon={faAt} />
            </div>
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
            <div className="divIcon">
              <FontAwesomeIcon icon={faKey} />
            </div>
            <input
              type="password"
              placeholder="Digite a sua senha"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </div>
          <button onClick={Login}>Login</button>
          <div className="sugestaoCadastro">
            <p>Não tem cadastro?</p>
            <Link to="/cadastro/1" className="crieSuaConta">
              Crie sua conta
            </Link>
          </div>
        </form>
      </LoginMain>
      <Footer />
    </>
  );
};

export default Login;

//https://www.youtube.com/watch?v=LI0YcHMu9P4