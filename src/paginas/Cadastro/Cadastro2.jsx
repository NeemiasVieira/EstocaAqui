import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import { useCadastroContext } from "../../contextos/CadastroContext";

const Cadastro2 = () => {
  const { usuario } = useCadastroContext();
  const [image, setImage] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
  };

  return (
    <>
      <p>Cadastro filho 2</p>
      <h1>{usuario.nome}</h1>
      <Link to="/cadastro/1">Voltar</Link>
      <button onClick={() => console.log(usuario)}>Mostrar</button>
      <div>
        <input type="file" onChange={handleUpload} />
        {image && (
          <div>
            <Image cloudName="seu_username" publicId={image} width="300" crop="scale">
              <Transformation quality="auto" fetchFormat="auto" />
            </Image>
            <p>Link da imagem: {image}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cadastro2;
