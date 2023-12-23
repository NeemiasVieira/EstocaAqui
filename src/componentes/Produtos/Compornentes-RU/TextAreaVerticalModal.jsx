import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 5px;
  width: 90%;

  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom: 16px;
  }

  label{
    text-align: center;
  }
`;

export const TextAreaVerticalModal = ({ nomeLabel, valor, onChange, rows, cols, identificador }) => {
  return (
    <Container>
      <label htmlFor={identificador}>{nomeLabel}</label>
      <textarea
        id={identificador}
        rows={rows}
        cols={cols}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </Container>
  );
};
