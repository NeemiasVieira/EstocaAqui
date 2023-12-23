import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
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
`;

export const BarraPesquisa = ({ valor, placeholder, onChange }) => {
  return (
    <Container>
      <input type="text" placeholder={placeholder} value={valor} onChange={(e) => onChange(e)} />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </Container>
  );
};
