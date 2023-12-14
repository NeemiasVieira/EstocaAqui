import React, { useEffect, useState } from "react";
import { useCadastroContext } from "../../contextos/CadastroContext";
import { CadastroEmpresa } from "./CadastroStyles";
import { Link, useNavigate } from "react-router-dom";
import { GrupoService } from "../../serviços/API/modulos/GrupoService";

const Cadastro6 = () => {
  const { usuario, grupo } = useCadastroContext();
  const [respostaGrupo,  setRespostaGrupo] = useState();
  const [erro, setErro] = useState();
  const navigate = useNavigate();

  const grupoService = new GrupoService(setRespostaGrupo, setErro);

  useEffect(() => {
    if(respostaGrupo) console.log(respostaGrupo)
    if(erro) console.log(erro)
    if(respostaGrupo?.status == 201) navigate("/cadastro/7");    
  }, [respostaGrupo, erro])


  const realizarCadastro = async (e) => {
    e.preventDefault();
    await grupoService.cadastrarGrupo(usuario, grupo);
  }

  return (
    <CadastroEmpresa>
     <h1>Confirme seus dados</h1>
      <form className="FormularioFinal">
       <h2>Confirmação de Cadastro</h2>

       <div className="ConfirmacaoDeCadastroDiv">

        <div className="dadosUsuario">
            <h3>Você</h3>
            <div className="DivImagemConteudo">
            <img src={usuario.imagem_de_perfil} className="imagemCadastro" alt="Imagem de perfil do usuário"></img>
            <div>
            <p><strong>Nome: </strong>{usuario.nome}</p>
            <p><strong>E-mail: </strong>{usuario.email}</p>
            <p><strong>Telefone: </strong>{usuario.telefone}</p>
            <p><strong>CPF: </strong>{usuario.cpf}</p>
            </div>
            </div>
        </div>
        <div className="dadosEmpresa">
            <h3>Sua Empresa</h3>
            <div className="DivImagemConteudo">
            <img src={grupo.logo} className="imagemCadastro" alt="Logo da empresa"></img>
            <div>
            <p><strong>Razão Social: </strong>{grupo.razao_social}</p>
            <p><strong>Nome Fantasia: </strong>{grupo.nome_fantasia}</p>
            <p><strong>CNPJ: </strong>{grupo.cnpj}</p>
            </div>
            </div>

        </div>

       </div>

       <div className="BotoesProximoVoltar">
          <Link to="/cadastro/5">Voltar</Link>
          <button className="ButtonLink" onClick={async(e) => realizarCadastro(e)}>Finalizar</button>
        </div>
      </form>
    </CadastroEmpresa>
  );
};

export default Cadastro6;
