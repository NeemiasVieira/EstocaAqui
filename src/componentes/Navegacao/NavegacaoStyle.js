import styled from "styled-components";

export const NavegacaoStyle = styled.nav`
  * {
    font-family: "Montserrat", sans-serif;
  }

  .navegacao {
    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 3.2vw;
    flex-flow: row;
    background-color: var(--preto-forte);
    margin: 0;
    height: 8vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: solid #ccc 3px;
  }
  img {
    width: 2.25em;
    height: 2.25em;
    border-radius: 35px;
  }

  li {
    list-style: none;
    color: whitesmoke;
  }

  a {
    color: whitesmoke;
    text-decoration: none;
    font-weight: 500;
    transition: all 250ms;
    :hover {
      font-size: 1.05em;
    }
  }
  .login {
    position: fixed;
    right: 2.4%;
  }
  .dropdown {
    float: left; //Determina que um elemento deve ser retirado do fluxo normal e colocado ao lado direito ou esquerdo do contâiner.
    overflow: hidden; //O conteúdo é cortado e nenhuma barra de rolagem é exibida.
    cursor: pointer;
  }
  .dropdown .dropli {
    font-size: 17px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    cursor: pointer;
  }
  .icone{
    margin-left: 12px;
  }
  .dropdown-content {
    margin-top: 1%;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    z-index: 1;
    box-shadow: 0px 16px 16px 0px rgba(0, 0, 0, 0.2);
    color: black;
    border-radius: 10px;
  ul {
      padding: 3px;
    }

  }
  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    display: block;
    text-align: left;
  }
  .dropdown-content a:hover {
    background-color: #ddd;
    color: black;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }

  //Deixando responsivo
  @media screen and (max-width: 480px) {
    overflow-x: hidden;

    .navegacao {
      max-width: 100vw;
      gap: 6vw;
    }
    ul {
      padding: 0 5vw;
    }
    a {
      :hover {
        font-size: 1em;
      }
    }
   .login {
      right: 10%;
    }
  }
`;
