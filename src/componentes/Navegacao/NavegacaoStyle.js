import styled from "styled-components";

export const NavegacaoStyle = styled.nav`
  * {
    font-family: "Montserrat", sans-serif;
  }

  .navegacao {
    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 4vw;
    flex-flow: row;
    background-color: #222;
    margin: 0;
    height: 7vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: solid #ccc 3px;
  }

  li {
    list-style: none;
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
    right: 3%;
  }

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

    .login{
      right: 10%;
    }

  }
`