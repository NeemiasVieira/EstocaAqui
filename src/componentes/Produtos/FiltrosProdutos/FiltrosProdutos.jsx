import styled from "styled-components";
import { useState } from "react";

const FiltrosProdutosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: row nowrap;
    gap: 15px;
`

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  min-width: 120px;
  cursor: pointer;
  background-color: transparent;
  padding-right: 20px;

  &:after {
    content: "▼"; 
    position: absolute;
    top: 59%;
    right: 8px; 
    transform: translateY(-50%);
    font-size: 10px; 
  }
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const DropdownItem = styled.div`
  padding: 0px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CorQuadradinho = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: ${(props) => props.cor};
`;

export function FiltrosProdutos({ onChangeOrdenarPor, onChangeFiltro }) {
  const [filtroPorTag, setFiltroPorTag] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const opcoesDeCores = [
    { nome: "Preto", valor: "#000" },
    { nome: "Branco", valor: "#fff" },
    { nome: "Vermelho", valor: "#f33" },
    { nome: "Verde", valor: "#3f3" },
    { nome: "Azul", valor: "#33f" },
    { nome: "Amarelo", valor: "#ff3" },
    { nome: "Ciano", valor: "#3ff" },
    { nome: "Magenta", valor: "#f3f" },
    { nome: "Verde Claro", valor: "#5aF" }
  ];

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleFiltroPorTagChange = (tag) => {
    setFiltroPorTag(tag);
    onChangeFiltro(tag);
    setDropdownOpen(false);
  };

  return (
    <FiltrosProdutosContainer>
      <label htmlFor="filtrarPor">Ordenar por: </label>
      <select id="filtrarPor" onChange={(e) => onChangeOrdenarPor(e)}>
        <option value={null}>Ordem Alfabética</option>
        <option value={"quantidade-dsc"}>Maior quantidade</option>
        <option value={"quantidade-asc"}>Menor quantidade</option>
        <option value={"valor_de_venda-dsc"}>Maior valor de venda</option>
        <option value={"valor_de_venda-asc"}>Menor valor de venda</option>
        <option value={"valor_de_compra-dsc"}>Maior valor de compra</option>
        <option value={"valor_de_compra-asc"}>Menor valor de compra</option>
      </select>

      <label htmlFor="filtrarPor">Filtrar por TAG</label>
      <DropdownContainer>
        <DropdownButton onClick={handleDropdownToggle}>
          {filtroPorTag ? (
            <>
              <CorQuadradinho cor={filtroPorTag} /> {opcoesDeCores.find((cor) => cor.valor === filtroPorTag).nome}
            </>
          ) : (
            "Sem filtro"
          )}
        </DropdownButton>
        {dropdownOpen && (
          <DropdownList>
            <DropdownItem onClick={() => handleFiltroPorTagChange(null)}>Sem filtro</DropdownItem>
            {opcoesDeCores.map((cor) => (
              <DropdownItem key={cor.nome} onClick={() => handleFiltroPorTagChange(cor.valor)}>
                <CorQuadradinho cor={cor.valor} /> {cor.nome}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </FiltrosProdutosContainer>
  );
}
