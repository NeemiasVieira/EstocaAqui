import styled from "styled-components";

export const SaidaStyle = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column; /* Para alinhar os elementos verticalmente */
  gap: 10px;
  width: 500px;
  align-items: center;
`;

export const SaidaSection = styled.section`
  font-weight: bold;
  background-color: #fff;
  color: #000;
  border: 2px solid #fff; /* Adicione a cor desejada para o contorno */
  border-radius: 5px;
  padding: 10px; /* Adicione espaçamento interno conforme necessário */
  min-width: 500px;
  max-width: 500px;
  align-items: center;
  align-content: center;
  justify-items: center;
`;

export const SaidaParagraph = styled.p`
  margin: 0; /* Remova a margem padrão dos parágrafos */
`;