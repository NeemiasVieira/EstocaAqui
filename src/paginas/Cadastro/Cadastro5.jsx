import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import { useCadastroContext } from "../../contextos/CadastroContext";
import { UploaderService } from "../../serviços/API/modulos/UploaderService";
import { CadastroEmpresaAdicionais } from "./CadastroStyles";

const Cadastro5 = () => {
  const { usuario, grupo, setImagemDePerfil } = useCadastroContext();

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
        setImagemDePerfil(resposta);       
      }
    },
    resposta,
    erro,
  );

  return (
    <CadastroEmpresaAdicionais>
      <h1>Dados Adicionais do Usuário</h1>
      <form>
      <h2>Escolha da Imagem de Perfil (Opcional)</h2>
        <div className="inputImagemDiv">
          {!image && (
            <div>
              <img src={usuario.imagem_de_perfil ? usuario.imagem_de_perfil : "https://i.imgur.com/G7TfQqj.jpg"} alt="Imagem de perfil"></img>
            </div>
          )}

          {image && (
            <div>
              <img src={image} alt="Imagem de perfil"></img>
            </div>
          )}
          <input type="file" onChange={lidarComMudancaArquivo} id="arquivo"/>

          <input type="file" class="input-file" id="arquivo" />

          <label for="arquivo" class="custom-label">
            Escolher Arquivo
          </label>
        </div>
        <div className="BotoesProximoVoltar">
          <Link to="/cadastro/4">Voltar</Link>
          <Link to="/cadastro/6">Próximo</Link>
        </div>
      </form>
    </CadastroEmpresaAdicionais>
  );
};

export default Cadastro5;
