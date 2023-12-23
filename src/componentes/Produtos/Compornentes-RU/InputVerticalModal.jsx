import styled from "styled-components";

const Container = styled.div`
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

  label{
    text-align: center;
  }

`;

export const InputVerticalModal = ({nomeLabel, valor, onChange, identificador }) => {
  return (
    <Container>
      <label htmlFor={identificador}>{nomeLabel}</label>
      <input id={identificador} value={valor} onChange={(e) => onChange(e.target.value)}></input>
    </Container>
  );
};
