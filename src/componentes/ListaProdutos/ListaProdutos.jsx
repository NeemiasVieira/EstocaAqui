import { ListaProdutosStyle } from "./ListaProdutosStyle";
import { Produto } from "../Produto/Produto";
import { ProdutoService } from "../../serviços/API/modulos/ProdutoService";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const ListaProdutos = ({atualizaPag, setAtualizaPag}) => {
  const [pesquisa, setPesquisa] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState();
  const [ProdutosFiltrados, setProdutosFiltrados] = useState();
  const produtosService = new ProdutoService(setProdutos, setErro);

  useEffect(() => {
    produtosService.getProdutos();
  }, [atualizaPag]);

  useEffect(() => {
    setProdutosFiltrados(produtos);
  }, [produtos])

  const onChangePesquisa = (event) => {
    setPesquisa(event.target.value);
    setProdutosFiltrados(
      produtos.filter((produto) => produto.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    );
  };

  useEffect(() => {
    console.log("rederizei dnv")
    if(pesquisa === "") setProdutosFiltrados(produtos);
  }, [pesquisa])

  return (
    <ListaProdutosStyle>
      <div className="DivInputs">
        <div className="DivSearch">
          <input
            type="text"
            id="search"
            placeholder="Digite um produto"
            value={pesquisa}
            onChange={(e) => onChangePesquisa(e)}
          />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="DivInputDate">
          <label htmlFor="filtrarPor">Ordenar por: </label>
          <select id="filtrarPor">
            <option>Ordem Alfabética</option>
            <option>Quantidade no estoque</option>
            <option>Preço de custo</option>
            <option>Preço de venda</option>
          </select>
          <label htmlFor="filtrarPor">Filtrar por tag: </label>
          <select id="filtrarPor">
            <option>Azul</option>
            <option>Vermelho</option>
            <option>Verde</option>
            <option>Amarelo</option>
            <option>Branco</option>
          </select>
        </div>
      </div>
      {ProdutosFiltrados && ProdutosFiltrados.length === 0 && <p>Nenhum produto encontrado.</p>}
      {ProdutosFiltrados && ProdutosFiltrados.length > 0 && (
        <table className="tabela">
          <thead>
            <tr>
              <th className="cor"></th>
              <th className="nome1">Nome</th>
              <th className="quantidade1">Quantidade</th>
              <th className="valor-de-compra1">Valor de Compra</th>
              <th className="valor-de-venda1">Valor de Venda</th>
              <th className="acoes1">Ações</th>
            </tr>
          </thead>
          <tbody>
            {ProdutosFiltrados.map((produto) => (
              <Produto produto={produto} key={produto.id} setAtualizaPag={setAtualizaPag} atualizaPag={atualizaPag} />
            ))}
          </tbody>
        </table>
      )}
    </ListaProdutosStyle>
  );
};
