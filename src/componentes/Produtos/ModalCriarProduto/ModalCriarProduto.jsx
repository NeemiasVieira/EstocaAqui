import { useEffect, useState } from "react";
import Modal from "react-modal";
import { BotaoModalCriarProduto } from "./ModalCriarProdutoStyle";
import { ModalCriarProdutoStyle } from "./ModalCriarProdutoStyle";
import { ProdutoService } from "../../../serviços/API/modulos/ProdutoService";
import { InputVerticalModal } from "../Compornentes-RU/InputVerticalModal";
import { TextAreaVerticalModal } from "../Compornentes-RU/TextAreaVerticalModal";
import { InputMenor } from "../Compornentes-RU/InputMenor";
import { InputCores } from "../Compornentes-RU/InputCores";
import { useAtualizarPagina } from "../../../contextos/AtualizarPaginaProvider";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    height: "600px",
  },
};

export const ModalCriarProduto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [erro, setErro] = useState();
  const [cor, setCor] = useState(null);
  const [valor_de_compra, setValorDeCompra] = useState("");
  const [valor_de_venda, setValorDeVenda] = useState("");
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [resposta, setResposta] = useState();

  const { atualizarPagina } = useAtualizarPagina();

  const produtoService = new ProdutoService(setResposta, setErro);

  useEffect(() => {
    if (resposta?.status === 201) {
      closeModal();
      atualizarPagina();
    }
  }, [resposta]);

  const cadastrarProduto = async () => {

    if(nome.length < 2){
      setErro("O Nome do produto precisa conter no mínimo 2 caracteres.")
      return;
    }

    if(tipo.length === 0){
      setErro("O campo Tipo é obrigatório.");
      return;
    }

    if (isNaN(valor_de_compra) || isNaN(valor_de_venda)) {
      setErro("O valor precisa ser um número");
      return;
    }

    const produto = {
      nome,
      tipo,
      descricao: descricao ? descricao : "Sem descrição.",
      valor_de_compra: valor_de_compra? Number(valor_de_compra) : 0,
      valor_de_venda: valor_de_venda ? Number(valor_de_venda) : 0,
      cor: cor? cor : "#000",
    };

    await produtoService.createProduto(produto);

    setErro(null);
    setCor(null);
    setNome("");
    setTipo("");
    setDescricao("");
    setValorDeCompra(null);
    setValorDeVenda(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <BotaoModalCriarProduto onClick={openModal}>Cadastrar Produto</BotaoModalCriarProduto>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          closeModal();
          setErro(undefined);
        }}
        style={customStyles}
      >
        <ModalCriarProdutoStyle>
          <h2>Cadastrando produto</h2>

          <InputVerticalModal nomeLabel="Nome *" valor={nome} onChange={setNome} identificador="nome" />
          <InputVerticalModal nomeLabel="Tipo *" valor={tipo} onChange={setTipo} identificador="tipo" />
          <TextAreaVerticalModal
            nomeLabel="Descrição"
            valor={descricao}
            identificador="descricao"
            cols={45}
            rows={5}
            onChange={setDescricao}
          />

          <div className="divValores">
            <InputMenor
              nomeLabel="Valor de compra"
              valor={valor_de_compra}
              onChange={setValorDeCompra}
              identificador="valorDeCompra"
            />
            <InputMenor
              nomeLabel="Valor de venda"
              valor={valor_de_venda}
              onChange={setValorDeVenda}
              identificador="valorDeVenda"
            />
          </div>

          <InputCores nomeLabel="Selecione um cor TAG" cor={cor} onChange={setCor} />

          <button onClick={cadastrarProduto}>Cadastrar produto</button>
          {erro && <p className="erro">{erro}</p>}
        </ModalCriarProdutoStyle>
      </Modal>
    </>
  );
};
