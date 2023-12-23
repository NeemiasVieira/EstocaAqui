import styled from "styled-components"

export const ModalCriarProdutoStyle = styled.div`

display: flex;
align-items: center;
flex-flow: column wrap;

h2{
    margin: 5px 5px 25px 5px;
}

  .divValores{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
    width: 100%;
    margin: 10px 0;

    input{
      width: 100px;
    }

    label{
      width: 145px;
    }

  }
  button {
    width: 200px;
    background-color: #fff;
    border: solid #000 1px;
    cursor: pointer;
    font-size: 1rem;
    padding: 3px 15px;
    border-radius: 5px;
    font-weight: 700;
    transition: all 200ms;
  }
  button:hover {
    color: #f33;
    transform: scale(1.1);
  }

  .erro{
    margin: 15px 0;
    color: #F33;
    font-weight: 700;
  }


`

export const BotaoModalCriarProduto = styled.button`
      background-color: #1f0441;
      border: solid #000 1px;
      color: #fff;
      cursor: pointer;
      font-size: 1rem;
      padding: 3px 15px;
      height: 35px;
      width: 200px;
      border-radius: 10px;
      font-weight: 700;
      transition: all 200ms;
      
      &:hover{
        transform: scale(1.1);
      }

`