import { useEffect, useState } from "react";
import Modal from "react-modal";
import { BotaoModalCriarProduto } from "./ModalCriarProdutoStyle";
import { ModalCriarProdutoStyle } from "./ModalCriarProdutoStyle";
import { ProdutoService } from "../../../serviços/API/modulos/ProdutoService";

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

export const ModalCriarProduto = ({aux}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState();
  const [cor, setCor] = useState(null);
  const [valor_de_compra, setValorDeCompra] = useState(""); 
  const [valor_de_venda, setValorDeVenda] = useState(""); 
  const [nome, setNome] = useState(""); 
  const [tipo, setTipo] = useState(""); 
  const [descricao, setDescricao] = useState(""); 
  const[resposta, setResposta] = useState();
  const produtoService = new ProdutoService(setResposta, setError);

  const colorOptions = ["#000", "#fff", "#f33", "#3f3", "#33f", "#ff3", "#3ff", "#f3f", "#5aF"];

  const handleColorClick = (color) => {
    setCor(color);
    // Aqui você pode realizar alguma ação com a cor selecionada
    console.log(`Cor selecionada: ${color}`);
  };

  useEffect(() => {
    console.log(resposta);
    console.log(error);
    if(resposta?.status === 201){
      closeModal();
      aux.setAtualizaPag(!aux.atualizaPag);
    }
  }, [resposta, error])

  const cadastrarProduto = async() => {

    if(isNaN(valor_de_compra) || isNaN(valor_de_venda)){
      setError("O valor precisa ser um número");
    }

    const produto = {
      nome,
      tipo,
      descricao,
      valor_de_compra: Number(valor_de_compra),
      valor_de_venda: Number(valor_de_venda),
      cor
    }

    await produtoService.createProduto(produto);
   
  }

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
          setError(undefined);
        }}
        style={customStyles}
      >
        <ModalCriarProdutoStyle>
          <h2>Cadastrando produto</h2>
          <div className="divInput">
            <label htmlFor="nome">Nome</label>
            <input id="nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
          </div>
          
          <div className="divInput">
            <label htmlFor="tipo">Tipo</label>
            <input id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}></input>
          </div>
          <div className="divInput">
            <label htmlFor="descricao">Descrição</label>
            <textarea id="descricao" rows={5} cols={45} value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
          </div>
          <div className="divValores">
            <label htmlFor="nome">Valor de compra</label>
            <input
              id="nome"
              type="text"
              value={valor_de_compra}
              onChange={(e) => setValorDeCompra(e.target.value)}
            ></input>
            <label htmlFor="nome">Valor de venda</label>
            <input
              id="nome"
              type="text"
              value={valor_de_venda}
              onChange={(e) => setValorDeVenda(e.target.value)}
            ></input>
          </div>

          <div className="divInputCores">
            <label htmlFor="selecaoCores">Selecione um cor tag</label>
            <div id="selecaoCores" style={{ display: "flex", flexWrap: "wrap" }}>
              {colorOptions.map((color) => (
                <div
                  key={color}
                  onClick={() => handleColorClick(color)}
                  style={{
                    border: cor === color ? "2px solid #000" : "1px solid #ccc",
                    backgroundColor: color,
                  }}
                  className="cor"
                />
              ))}
            </div>
          </div>

          <button onClick={cadastrarProduto}>Cadastrar produto</button>
          {error && <p>{error}</p>}
        </ModalCriarProdutoStyle>
      </Modal>
    </>
  );
};
