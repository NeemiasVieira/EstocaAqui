import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 10px;
  margin-bottom: 20px;

  .cor {
    border-radius: 15px;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }
`;

export const InputCores = ({nomeLabel, cor, onChange}) => {
  const colorOptions = ["#000", "#fff", "#f33", "#3f3", "#33f", "#ff3", "#3ff", "#f3f", "#5aF"];

  return (
    <Container>
      <label htmlFor="selecaoCores">{nomeLabel}</label>
      <div id="selecaoCores" style={{ display: "flex", flexWrap: "wrap" }}>
        {colorOptions.map((color) => (
          <div
            key={color}
            onClick={() => onChange(color)}
            style={{
              border: cor === color ? "2px solid #000" : "1px solid #ccc",
              backgroundColor: color,
            }}
            className="cor"
          />
        ))}
      </div>
    </Container>
  );
};
