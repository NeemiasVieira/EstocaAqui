import { SaidaService } from "../../serviços/API/modulos/SaidaService";
import { SaidaStyle, SaidaSection, SaidaParagraph } from "./SaidaStyle";



const Saida = ({saida, saidaCompleta}) => {
  return (
    <SaidaStyle>
      {saidaCompleta && (
        <SaidaSection>
          <SaidaParagraph>NF: {saida.nf}</SaidaParagraph>
          <SaidaParagraph>Usuário: {saida.id_usuario}</SaidaParagraph>
        </SaidaSection>
        )}
        <SaidaSection>
          <SaidaParagraph>Tipo: {saida.tipo}</SaidaParagraph>
          <SaidaParagraph>Descrição: {saida.descricao}</SaidaParagraph>
        </SaidaSection>
</SaidaStyle>
  );
};

export default Saida;
