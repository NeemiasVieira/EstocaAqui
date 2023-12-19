import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginMain } from "./LoginStyle";
import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import { Loading } from "../../componentes/Loading/Loading";
import { UsuarioService } from "../../serviços/API/modulos/UsuarioSerivce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { validarEmail } from "../Cadastro/Cadastro4";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailValido, setEmailValido] = useState(false);
  const [resposta, setResposta] = useState();
  const [erro, setErro] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const usuarioSerivce = new UsuarioService(setResposta, setErro);
  const navigate = useNavigate();

  const autenticar = async (e) => {
    e.preventDefault();

    if (email.length === 0) {
      setErro("Campo e-mail é obrigatório.");
      return;
    }

    if (!emailValido) {
      setErro("O e-mail precisa ser válido.");
      return;
    }

    if (senha.length === 0) {
      setErro("O campo senha é obrigatório.");
      return;
    }

    setIsLoading(true);
    await usuarioSerivce.login(email, senha);
    setIsLoading(false);
  };

  if (isLoading)
    return (
      <>
        <LoginMain>
          <Navegacao />
          <Loading minHeight="40vh"/>
        </LoginMain>
        <Footer />
      </>
    );

    if (resposta?.status === 200) {
      localStorage.setItem("tokenValido", "true");
      localStorage.setItem("token", resposta.data.token);
      localStorage.setItem("nome", resposta.data.usuario.nome);
      localStorage.setItem("userID", resposta.data.usuario.id);
      navigate("/homepage1");
    }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailValido(validarEmail(e.target.value));
  };

  return (
    <>
      <LoginMain>
        <Navegacao />
        <h2>Login</h2>

        <form type="submit">
          <label htmlFor="emailInput">Usuário</label>
          <div className="divInput">
            <div className="divIcon">
              <FontAwesomeIcon icon={faAt} />
            </div>
            <input
              id="emailInput"
              autoComplete="username"
              type="text"
              placeholder="Digite o seu e-mail"
              value={email}
              onChange={(e) => {
                onChangeEmail(e);
              }}
            />
          </div>

          <label htmlFor="">Senha</label>
          <div className="divInput">
            <div className="divIcon">
              <FontAwesomeIcon icon={faKey} />
            </div>
            <input
            autoComplete="current-password"
              type="password"
              placeholder="Digite a sua senha"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </div>
          <button onClick={autenticar}>Login</button>
          {erro && <p className="mensagemDeErro">{erro}</p>}
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
