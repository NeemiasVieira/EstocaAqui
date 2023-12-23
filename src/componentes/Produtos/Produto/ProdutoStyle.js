import styled from "styled-components";

export const ProdutoStyle = styled.tr`
  .barra {
    display: table-cell;
    height: 60.2px;
    width: 25px;
    border-radius: 20px 0 0 20px;
  }

  .acoes {
    display: table-cell;
    text-align: center;

    .BotaoEntradas {
      font-size: 1rem;
      background-color: var(--branco);
      cursor: pointer;
      border: none;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 1rem;
        margin-right: 5px;
      }
    }

    .botaoEdicao,
    .botaoExclusao {
      cursor: pointer;
      font-size: 1.3rem;
    }

    .botaoExclusao:hover{
      color: var(--vermelho-claro);
    }
    .botaoEdicao:hover{
      color: var(--dourado);
    }
  }

  .nome,
  .quantidade,
  .valor-de-compra,
  .valor-de-venda {
    text-align: center;
    width: 120px; 
  }

  .acoes-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 20px;
  }

`;
