import React from "react";
import styled from 'styled-components';
import Modal from "react-modal";

const ConfirmacaoDeExclusaoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 15px;

  button {
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
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column wrap",
    border: "solid #000 1px",
    width: "350px",
    height: "200px",
  },
};

export const ConfirmacaoDeExclusao = ({ onDelete, isModalOpen, closeModal }) => {

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Are you sure"
        style={customStyles}
      >
        <h2>Excluir Produto</h2>
        <p>Você deseja mesmo excluir este produto?</p>
        <ConfirmacaoDeExclusaoStyle className="buttons">
          <button onClick={closeModal}>Não</button>
          <button
            onClick={(e) => onDelete()}
            style={{ marginLeft: "10px" }}
          >
            Sim
          </button>
        </ConfirmacaoDeExclusaoStyle>
      </Modal>
    </>
  );
};