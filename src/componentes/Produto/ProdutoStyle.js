import styled from "styled-components";

export const ProdutoStyle = styled.div`

  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  gap: 20px;
  max-width: 1000px;
  width: 85vw;
  border: solid var(--preto-forte) 1px;
  border-radius: 20px;
  font-size: 1rem;

  span {
    display: inline-block; 
    height: 60.2px;
    width: 25px; 
    background-color: var(--vermelho-claro); 
    margin-right: 5px;
    border-radius: 20px 0 0 20px;
  }

  .botaoEdicao{
    cursor: pointer;
    font-size: 1.3rem;
    :hover{
      color: var(--dourado);
    }
  }

  .botaoExclusao{
    cursor: pointer;
    font-size: 1.3rem;

    :hover{
      color: var(--vermelho-claro);
    }

  }

  .BotaoEntradas{
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: var(--branco);
    cursor: pointer;
    border: none;
    gap: 10px;

    svg{
      align-self: center;
      font-size: 1rem;
    }
  }

  .nome{
    margin-left: 10px;
    width: 220px;
  }

  .quantidade{
    width: 85px;
  }

  .valor-de-compra, .valor-de-venda{
    width: 120px;
  }

  .icones{
    margin: 0 10px;
  }

  .nome, .quantidade, .valor-de-compra, .valor-de-venda{
    text-align: center;
  }
`;
