import { ProdutoStyle } from "./ProdutoStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPenToSquare, faBars} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import { ProdutoService } from "../../serviços/API/modulos/ProdutoService";

export const Produto = ({ produto, setAtualizaPag, atualizaPag}) => {

  const [respostaExclusao, setRespostaExclusao] = useState();
  const [erro, setErro] = useState();

  const produtoService = new ProdutoService(setRespostaExclusao, setErro);

  const excluirProduto = async(e) => {
    await produtoService.deleteProduto(produto.id);
  }

  useEffect(() => {
    if(respostaExclusao?.status === 200){
      setAtualizaPag(!atualizaPag)
    }
  }, [respostaExclusao]);


    useEffect(() => {
        
    },[]);

    return (
      <ProdutoStyle>
        <td className="barra" style={{ backgroundColor: produto.cor || '#000' }}></td>
        <td className="nome">{produto.nome}</td>
        <td className="quantidade">{produto.quantidade}</td>
        <td className="valor-de-compra">R$30,00</td>
        <td className="valor-de-venda">R$45,00</td>
        <td className="acoes">
          <div className="acoes-container">
            <button className="BotaoEntradas">
              <FontAwesomeIcon icon={faBars} /> Entradas relacionadas
            </button>
            <p className="icones">
              <FontAwesomeIcon icon={faPenToSquare} className="botaoEdicao" />
            </p>
            <p>
              <FontAwesomeIcon icon={faTrash} className="botaoExclusao" onClick={(e) => excluirProduto(e)} />
            </p>
          </div>
        </td>
      </ProdutoStyle>
    );
  };

