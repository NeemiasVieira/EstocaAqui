import { ListaProdutosStyle } from "./ListaProdutosStyle";
import { ProdutoService } from "../../../serviços/API/modulos/ProdutoService";
import { useEffect, useState } from "react";
import { FiltrosProdutos } from "../FiltrosProdutos/FiltrosProdutos";
import { TabelaProdutos } from "../Compornentes-RU/TabelaProdutos";
import { BarraPesquisa } from "../Compornentes-RU/BarraPesquisa";
import { useAtualizarPagina } from "../../../contextos/AtualizarPaginaProvider";

export const ListaProdutos = () => {
  const [pesquisa, setPesquisa] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState();
  const [ProdutosFiltrados, setProdutosFiltrados] = useState();
  const [ordenarPor, setOrdenarPor] = useState(null);
  const [filtrarPor, setFiltrarPor] = useState(null);

  const produtosService = new ProdutoService(setProdutos, setErro);
  const { atualizarPagina } = useAtualizarPagina();

  useEffect(() => {
    produtosService.getProdutos(ordenarPor, filtrarPor);
    if(erro) console.log(erro);
  }, [ ordenarPor, filtrarPor, atualizarPagina ]);

  useEffect(() => {
    setProdutosFiltrados(produtos);
  }, [produtos]);

  const onChangePesquisa = (event) => {
    setPesquisa(event.target.value);
    setProdutosFiltrados(
      produtos.filter((produto) => produto.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    );
  };

  useEffect(() => {
    if (pesquisa === "") setProdutosFiltrados(produtos);
  }, [pesquisa]);

  const handleOnChangeOrdenarPor = (e) => {
    if (e.target.value === "Ordem Alfabética") setOrdenarPor(null);
    else setOrdenarPor(e.target.value);
  };

  const onChangeFiltro = (filtro) => {
    setFiltrarPor(filtro);
  };

  return (
    <ListaProdutosStyle>

      <div className="DivInputs">
        <BarraPesquisa valor={pesquisa} onChange={onChangePesquisa} placeholder="Digite um produto" />
        <FiltrosProdutos onChangeOrdenarPor={handleOnChangeOrdenarPor} onChangeFiltro={onChangeFiltro} />
      </div>

      {ProdutosFiltrados && ProdutosFiltrados.length === 0 && <p>Nenhum produto encontrado.</p>}

      {ProdutosFiltrados && ProdutosFiltrados.length > 0 && (
        <TabelaProdutos produtos={ProdutosFiltrados} />
      )}
    </ListaProdutosStyle>
  );
};
