import { ProdutoStyle } from "./ProdutoStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { ProdutoService } from "../../../serviços/API/modulos/ProdutoService";
import { useAtualizarPagina } from "../../../contextos/AtualizarPaginaProvider";
import { ConfirmacaoDeExclusao } from "../Compornentes-RU/ConfirmacaoDeExclusao";

export const Produto = ({ produto }) => {
  const [respostaExclusao, setRespostaExclusao] = useState();
  const [erro, setErro] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const produtoService = new ProdutoService(setRespostaExclusao, setErro);

  const { atualizarPagina } = useAtualizarPagina();

  const excluirProduto = async () => {
    await produtoService.deleteProduto(produto.id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (respostaExclusao?.status === 200) {
      atualizarPagina();
    }

    if (erro) console.log(erro);
  }, [respostaExclusao]);

  return (
    <ProdutoStyle>
      <td className="barra" style={{ backgroundColor: produto.cor || "#000" }}></td>
      <td className="nome">{produto.nome}</td>
      <td className="quantidade">{produto.quantidade}</td>
      <td className="valor-de-compra">
        {" "}
        {typeof produto.valor_de_compra === "number" ? `R$${produto.valor_de_compra.toFixed(2)}` : "R$0,00"}
      </td>
      <td className="valor-de-venda">
        {" "}
        {typeof produto.valor_de_venda === "number" ? `R$${produto.valor_de_venda.toFixed(2)}` : "R$0,00"}
      </td>
      <td className="acoes">
        <div className="acoes-container">
          <button className="BotaoEntradas">
            <FontAwesomeIcon icon={faBars} /> Entradas relacionadas
          </button>
          <p className="icones">
            <FontAwesomeIcon icon={faPenToSquare} className="botaoEdicao" />
          </p>
          <p>
            <ConfirmacaoDeExclusao onDelete={excluirProduto} isModalOpen={isModalOpen} closeModal={closeModal}/>
            <FontAwesomeIcon icon={faTrash} className="botaoExclusao" onClick={() => setIsModalOpen(true)} />
          </p>
        </div>
      </td>
    </ProdutoStyle>
  );
};
