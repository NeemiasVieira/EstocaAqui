import styled from "styled-components";

export const MensagemErroStyle = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--cinza);

  div {
    max-width: 500px;
    width: 40vw;
    background-color: var(--preto-forte);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    color: whitesmoke;
    border-radius: 25px;
  }

  .icone {
    font-size: 6em;
    color: yellow;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.2em;
    font-weight: 600;
  }
  h3 {
    font-size: 1em;
    font-weight: 500;
    margin: 0;
  }

  p {
    color: var(--vermelho-claro);
    font-size: 1rem;
    font-weight: 700;
    padding: 10px;
    border-radius: 10px;

  }

  button {
    margin: 0;
    max-width: 35vw;
    text-decoration: none;
    color: whitesmoke;
    font-size: 1em;
    font-weight: 900;
    margin: 20px 0 30px 0;
    transition: transform 300ms;
    background-color: inherit;
    border: none;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 480px) {
    div {
      max-width: 400px;
      width: 90vw;
    }

    h1 {
      font-size: 2.2em;
    }

    h2 {
      font-size: 1.4em;
    }
    h3 {
      font-size: 1em;
    }

    p {
      font-size: 1em;
    }
    a {
      margin: 20px 0 30px 0;
      max-width: 85vw;

      :hover {
        transform: scale(1);
      }
    }
  }
`;