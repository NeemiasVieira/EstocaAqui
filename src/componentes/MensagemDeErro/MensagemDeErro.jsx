import React from "react";
import { MensagemErroStyle } from "./MensagemDeErroStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export const MensagemDeErro = ({ error, mensagemBotao, setError }) => {

  const voltar = () => {
    setError(null);
  }

  return (
    <MensagemErroStyle>
      <div>
        <h1>Oops!</h1>
        <FontAwesomeIcon icon={faTriangleExclamation} className="icone" />
        <h2>Algo deu errado</h2>
         <p><strong>{error}</strong></p>
        
        <button onClick={voltar}>{mensagemBotao}</button>
      </div>
    </MensagemErroStyle>
  );
};