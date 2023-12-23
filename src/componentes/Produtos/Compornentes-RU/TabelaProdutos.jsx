import styled from "styled-components";
import { Produto } from "../Produto/Produto";

const Tabela = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;
  margin-top: 20px;
  margin-top: -10px;

  td:last-child {
    border-right: solid #000 1px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
  td {
    border-top: solid #000 1px;
    border-bottom: solid #000 1px;
  }

  thead tr {
    border: none;
  }

  tr {
    padding: 10px;
    border: none;
  }

  .titulo th {
    background-color: var(--preto);
    color: var(--branco);
    border-radius: 20px 20px 0 0;
  }

  .nome1 {
    width: 230px;
  }

  .valor-de-compra1,
  .valor-de-venda1 {
    width: 140px;
  }

  .acoes1 {
    text-align: center;
    width: 350px;
  }
`;

export const TabelaProdutos = ({ produtos }) => {
  return (
    <Tabela>
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
        {produtos.map((produto) => (
          <Produto produto={produto} key={produto.id}  />
        ))}
      </tbody>
    </Tabela>
  );
};
