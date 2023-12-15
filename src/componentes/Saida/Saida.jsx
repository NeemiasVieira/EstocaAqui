const Saida = ({saida, saidaCompleta}) => {
  return (
    <>
    {saidaCompleta && (
      <section>
        <p>{saida.nf}</p>
        <p>{saida.id_usuario}</p>
      </section>
    )}
      <p>{saida.tipo}</p>
      <p>{saida.descricao}</p>
    </>
  );
};

export default Saida;
