import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 3px;

    label{
    text-align: center;
  }

`

export const InputMenor = ({ nomeLabel, valor, onChange, identificador }) => {
  return (
    <Container>
      <label htmlFor={identificador}>{nomeLabel}</label>
      <input
        id={identificador}
        type="text"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </Container>
  );
};
