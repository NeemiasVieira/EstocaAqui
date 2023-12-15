import styled from "styled-components";

export const CadastroEmpresa = styled.section`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  color: #fff;

  h1{
    margin-top: 50px;
    color: #000;
  }

  form {
    background: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 50vw;
    max-width: 450px;
    border: solid #ccc 3px;
    border-radius: 10px;
    padding: 20px;
    overflow-x: hidden;
    margin-bottom: 50px;
  }

  label {
    text-align: center;
    color: #fff;
    font-weight: 600;
    margin: 5px 0;
    font-size: 1rem;
  }

  .divIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-right: solid #000 2px;
    width: 60px;
  }

  svg {
    font-size: 1.8rem;
    height: 35px;
    color: #000;
    padding-right: 15px;
  }

  .divInput {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #fff;
    padding: 0 10px;
    border-radius: 5px;
    max-height: 50px;
  }

  input {
    margin: 10px 0;
    width: 30vw;
    height: 39px;
    padding: 3px;
    max-width: 300px;
    border: none;
    background: #fff;
    color: #000;
    font-size: 1rem;
  }

  input:focus {
    outline: none;
  }

  .botaoCadastrar {
    margin-top: 20px;
    cursor: pointer;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 1.2em;
    transition: all 300ms;
    background: #fff;
    color: #000;

    :hover {
      transform: scale(1.1);
    }
  }

  .BotoesProximoVoltar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    margin-top: 5px;
    padding: 10px;
    gap: 50px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #000;
      transition: all 200ms;
      background-color: #fff;
      padding: 10px;
      border-radius: 10px;
      width: 100px;
    }
    a:hover {
      transform: scale(1.1);
    }
  }

  .mensagemDeErro{
    margin: 10px 0 0 0;
    color: #F44;
  }

  .ConfirmacaoDeCadastroDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 50px;
  }

  .imagemCadastro{
    width: 100px;
    height: 100px;
    border-radius: 75px;
  }

  .FormularioFinal{
    width: 85vw;
    max-width: 900px;
  }

  .dadosUsuario, .dadosEmpresa{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  }

  .DivImagemConteudo{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 25px;
    max-width: 400px;

    div, p{
      max-width: 400px;
    }
  }

  .ButtonLink{
    display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #000;
      transition: all 200ms;
      background-color: #fff;
      padding: 10px;
      border-radius: 10px;
      width: 120px;
      height: 41.33px;
      cursor: pointer;
      border: none;
  }

  .ButtonLink:hover{
    transform: scale(1.1);
  }

  .checkFinal{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 75px;
    color: #2d4
  }

  .sugestaoLogin {
    margin-top: 5px;
    color: #000;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1rem;

    p {
      font-size: 0.9rem;
      font-weight: 300;
      color: #fff;
    }

    a{
      text-decoration: none;
    }
  }

  .facaLogin{
    font-weight: 600;
    color: #fff;
  }

  
`;

export const CadastroEmpresaAdicionais = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;

  form {
    background: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 80vw;
    max-width: 700px;
    border: solid #ccc 3px;
    border-radius: 10px;
    padding: 20px;
    overflow-x: hidden;
    color: #fff;
  }
  .BotoesProximoVoltar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    margin-top: 20px;
    padding: 10px;
    gap: 50px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #000;
      transition: all 200ms;
      background-color: #fff;
      padding: 10px;
      border-radius: 10px;
      width: 100px;
    }
    a:hover {
      transform: scale(1.1);
    }
  }

  img{
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }

  .inputImagemDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 50px;
  }

  input{
    position: absolute;
    left: -9999px;
  }

  .custom-label {
      background-color: #3498db;
      color: #fff;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      display: inline-block;
      transition: all 200ms;
    }

    .custom-label:hover{
      transform: scale(1.1);
    }
`;
