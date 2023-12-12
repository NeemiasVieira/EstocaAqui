import styled from "styled-components";

export const LoginMain = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  min-height: 93vh;

  h1 {
    margin: 0;
  }

  h2{
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
    height: 50vh;
    max-height: 400px;
    border: solid #ccc 3px;
    border-radius: 10px;
    padding: 20px;
    overflow-x: hidden;
  }

  label {
    text-align: center;
    color: #fff;
    font-weight: 600;
    margin: 10px 0;
    font-size: 1.2rem;
  }

  .divIcon{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-right: solid #000 2px;
  }

  svg{
    font-size: 1.8rem;
    height: 45px;
    color: #000;
    padding-right: 15px;    
  }

  .divInput{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #fff;
    padding: 0 10px;
    border-radius: 5px;
  }

  input {
    margin: 10px 0;
    font-size: 1rem;
    width: 30vw;
    height: 25px;
    padding: 10px;
    max-width: 300px;
    border: none;    
    background: #fff;
    color: #000;
  }

  input:focus{
    outline: none;
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
    background: #fff;
    color: #000;

    :hover {
      transform: scale(1.1);
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
  }

  .sugestaoCadastro {
    margin-top: 20px;
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
  }

  .crieSuaConta{
    font-weight: 600;
    color: #fff;
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
      max-width: 450px;
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
      height: 60vh;
    }
  }
`;