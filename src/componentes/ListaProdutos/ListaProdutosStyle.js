import styled from "styled-components";

export const ListaProdutosStyle = styled.section`

display: flex;
justify-content: center;
align-items: center;
flex-flow: column wrap;

  .tabela {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 20px; 
    margin-top: 20px;
    margin-top: -10px;
  }

td:last-child {
  border-right: solid #000 1px;
  border-bottom-right-radius: 10px; 
  border-top-right-radius: 10px; 
}
td{
  border-top: solid #000 1px;
  border-bottom: solid #000 1px;
}

thead tr{
  border: none;
}

  tr{
    padding: 10px;
    border: none;
  }
  
  .titulo th {
    background-color: var(--preto);
    color: var(--branco);
    border-radius: 20px 20px 0 0;
  }

  .nome1{
    width: 230px;
  }
  
  .valor-de-compra1, .valor-de-venda1{
    width: 140px;
  }

  .acoes1 {
    text-align: center;
    width: 350px;
  }

  .DivInputs {
    width: 50vw;
    margin: 25px 0;
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
    align-items: center;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .DivSearch {
    width: 100%;
    svg {
      font-size: 1.3rem;
      transform: scaleX(-1);
      margin-left: 15px;
    }

    input {
      width: 85%;
      border-radius: 10px;
      padding: 5px;
    }
    button {
      margin: 0;
      border: none;
      cursor: pointer;
      background-color: inherit;
    }
  }

  .DivInputDate {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
  }
`;