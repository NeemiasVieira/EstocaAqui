import styled from "styled-components";

export const CadastroMain = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  min-height: 93vh;

  h1 {
    margin-bottom: 0;
  }

  h2 {
    margin: 25px 0;
    font-size: 1.6rem;
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

  input:focus{
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

  a {
    text-decoration: none;
    font-size: 1rem;
  }

  .sugestaoCadastro {
    margin-top: 20px;
    color: #fff;
    display: flex;
    font-size: 1rem;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 10px;

    p {
      font-size: 0.9em;
      font-weight: 300;
    }

    .jaPossuiCadastro {
      color: #fff;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 1.3em;
    }

    h2 {
      margin-top: 5px;
      font-size: 1rem;
    }
    form {
      width: 80vw;
      max-width: 450px;
      height: 55vh;
      max-height: 550px;
    }

    input {
      width: 50vw;
      max-width: 400px;
      color: #000;
    }
    button {
      width: 150px;
      height: 34px;
      font-size: 1.1em;

      :hover {
        transform: scale(1);
      }
    }

    .sugestaoCadastro {
      color: #fff;
      overflow-x: hidden;
      max-width: 55vw;
      margin-top: 5px;
    }
  }

  @media screen and (min-width: 500px) and (max-width: 1370px) {
    min-height: 120vh;
  }
`;