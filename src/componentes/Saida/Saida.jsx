import { SaidaService } from "../../serviços/API/modulos/SaidaService";
import { SaidaStyle } from "./SaidaStyle";


const Saida = ({saida, saidaCompleta}) => {
  return (
    <SaidaStyle>
    {saidaCompleta && (
      <section>
        <p>NF: {saida.nf}</p>
        <p>Usuário: {saida.id_usuario}</p>
      </section>
    )}
      <p>Tipo: {saida.tipo}</p>
      <p>Descrição: {saida.descricao}</p>
    </SaidaStyle>
  );
};

export default Saida;
