import styled from "styled-components";

export const LoginMain = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  min-height: 93vh;
  overflow-x: hidden;

  h1 {
    margin: 0;
  }

  h2{
    margin: 25px 0;
    font-size: 1.6rem;
  }

  form {
    background: var(--preto-forte);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 50vw;
    max-width: 475px;
    height: 55vh;
    max-height: 450px;
    border: solid #ccc 3px;
    border-radius: 10px;
    padding: 20px;
    overflow: hidden;
  }

  label {
    text-align: center;
    color: var(--branco);
    font-weight: 600;
    margin: 5px 0;
    font-size: 1rem;
  }
  
  svg {
    font-size: 1.8rem;
    height: 35px;
    color: var(--preto);
    padding-right: 15px;
  }

  input {
    margin: 10px 0;
    width: 30vw;
    height: 39px;
    padding: 3px;
    max-width: 300px;
    border: none;
    background: var(--branco);
    color: var(--preto);
    font-size: 1rem;
  }

  input:focus {
    outline: none;
  }

  .divIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-right: solid var(--preto) 2px;
    width: 60px;
  }

  .divInput {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: var(--branco);
    padding: 0 10px;
    border-radius: 5px;
    max-height: 50px;
  }

  svg{
    font-size: 1.5rem;
    height: 45px;
    color: var(--preto);
    padding-right: 15px;    
  }

  

  button {
    margin-top: 20px;
    cursor: pointer;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 1.2em;
    transition: all 300ms;
    background: var(--branco);
    color: var(--preto);

    :hover {
      transform: scale(1.1);
    }
  }

  a {
    text-decoration: none;
    color: var(--branco);
    font-size: 1rem;
  }

  .sugestaoCadastro {
    margin-top: 20px;
    color: var(--preto);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1rem;

    p {
      font-size: 0.9rem;
      font-weight: 300;
      color: var(--branco);
    }
  }

  .crieSuaConta{
    font-weight: 600;
    color: var(--branco);
  }
  
  .mensagemDeErro {
    margin: 10px 0 0 0;
    color: #f44;
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 1.3em;
    }

    h2{
      margin-top: 5px;
      font-size: 1rem;
    }
    form {
      width: 80vw;
      max-width: 475px;
      height: 45vh;
    }

    .divIcon{
      height: 45px;

      svg{
        height: 30px;
      }
    }

    input {
      width: 50vw;
      max-width: 400px;
      font-size: 1rem;
      height: 5px;
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
      overflow-x: hidden;
      margin-top: 5px;
      max-width: 55vw;
      font-size: .9rem;
    }
  }

  @media screen and (min-width: 500px) and (max-width: 1370px) {
    min-height: 110vh;
    form{
      height: 65vh;
    }
  }
`;