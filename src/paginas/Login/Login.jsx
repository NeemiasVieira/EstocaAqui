import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginMain } from "./LoginStyle";
import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import { Loading } from "../../componentes/Loading/Loading";
import { MensagemDeErro } from "../../componentes/MensagemDeErro/MensagemDeErro";
// import { UserService } from "../../services/API/UserSerivice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
//   const userService = new UserService(setResponse, setError);
  const navigate = useNavigate();

//   const Login = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     await userService.login(email, password);
//     setIsLoading(false);
//   };

  useEffect(() => {}, [response, error]);

  if (error)
    return (
      <MensagemDeErro
        error={error.response?.data.mensagem}
        mensagemBotao="Voltar"
        setError={setError}
      />
    );

  if (isLoading) return <Loading/>

  if (response?.status === 200) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("nome", response.data.usuario.nome);
    localStorage.setItem("userID", response.data.usuario.id);
    navigate("/sistema/home");
  }

  return (
    <>
      <LoginMain>
        <Navegacao/>
        <h1>Sistema de Monitoramento de Solo</h1>
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button>Login</button>
          <div className="sugestaoCadastro">
            <p>Não tem cadastro?</p>
            <Link to="/cadastro" className="crieSuaConta">
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