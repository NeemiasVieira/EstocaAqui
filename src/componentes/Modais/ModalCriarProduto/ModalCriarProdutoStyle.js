import styled from "styled-components"

export const ModalCriarProdutoStyle = styled.div`

display: flex;
align-items: center;
flex-flow: column wrap;

h2{
    margin: 5px;
}

.divInput {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 5px;
    width: 90%;

    input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  margin-bottom: 5px;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  margin-bottom: 16px;
}
  }

  .divValores{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
    width: 90%;
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

  .Error{
    margin: 0 0 10px 0;
    color: #F33;
    font-weight: 700;
  }

  .cor{
    border-radius: 15px;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  label{
    text-align: center;
  }

  .divInputCores{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 10px;
    margin-bottom: 20px;
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