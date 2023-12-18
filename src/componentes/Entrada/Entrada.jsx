import { EntradaStyle, EntradaSection, EntradaParagraph } from "./EntradaStyle";

const Entrada = ({ entrada, entradaCompleta }) => {
  return (
    <EntradaStyle>
      {entradaCompleta && (
        <EntradaSection>
          <EntradaParagraph>NF: {entrada.nf}</EntradaParagraph>
          <EntradaParagraph>Usuário: {entrada.id_usuario}</EntradaParagraph>
        </EntradaSection>
        )}
        <EntradaSection>
          <EntradaParagraph>Tipo: {entrada.tipo}</EntradaParagraph>
          <EntradaParagraph>Descrição: {entrada.descricao}</EntradaParagraph>
        </EntradaSection>
</EntradaStyle>
  );
};

export default Entrada;
