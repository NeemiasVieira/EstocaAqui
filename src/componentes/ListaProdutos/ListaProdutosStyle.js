import styled from "styled-components";

export const ListaProdutosStyle = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 20px;

  .titulo {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    gap: 20px;
    max-width: 1000px;
    width: 85vw;
    background-color: var(--preto);
    color: var(--branco);
    border-radius: 20px;
  }

  .produtos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 20px;
  }

  .nome1 {
    margin-left: 10px;
    width: 220px;
    margin-left: 60px;
  }

  .quantidade1 {
    width: 85px;
  }

  .valor-de-compra1,
  .valor-de-venda1 {
    width: 120px;
  }

  .acoes {
    width: 320px;
  }

  .acoes, .valor-de-compra1, .valor-de-venda1, .nome1{
    text-align: center;
  }
`;
