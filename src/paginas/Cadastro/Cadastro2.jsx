import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCadastroContext } from "../../contextos/CadastroContext";
import { UploaderService } from "../../serviços/API/modulos/UploaderService";
import { CadastroEmpresaAdicionais } from "./CadastroStyles";

const Cadastro2 = () => {
  const { usuario, setLogo, setBanner, grupo } = useCadastroContext();

  const [resposta, setResposta] = useState(null);
  const [erro, setErro] = useState(null);
  const [image, setImamge] = useState();

  const servicoUploader = new UploaderService(setResposta, setErro);

  const lidarComMudancaArquivo = async (evento) => {

    await servicoUploader.enviarImagem(evento.target.files[0]);
  };

  useEffect(
    () => {
      if (resposta) {
        setImamge(String(resposta));

        setLogo(resposta);       

      }
    },
    resposta,
    erro
  );

  return (
    <CadastroEmpresaAdicionais>
      <h1>Dados Adicionais da Empresa</h1>
      <form>
        <h2>Escolha da Logo (Opcional)</h2>
        <div className="inputImagemDiv">
          {!image && (
            <div>
              <img
                src={
                  grupo.logo ? grupo.logo : "https://i.imgur.com/IMKOP10.jpg"
                }
                alt="Imagem de perfil"
              ></img>
            </div>
          )}

          {image && (
            <div>
              <img src={image} alt="Imagem de perfil"></img>
            </div>
          )}
          <input type="file" onChange={lidarComMudancaArquivo} id="arquivo" />

          <input type="file" class="input-file" id="arquivo" />

          <label for="arquivo" class="custom-label">
            Escolher Arquivo
          </label>
        </div>
        <div className="BotoesProximoVoltar">
          <Link to="/cadastro/1">Voltar</Link>
          <Link to="/cadastro/3">Próximo</Link>
        </div>
      </form>
    </CadastroEmpresaAdicionais>
  );
};

export default Cadastro2;
