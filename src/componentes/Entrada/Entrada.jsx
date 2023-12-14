const Entrada = ({ entrada, entradaCompleta }) => {
  return (
    <>
      {entradaCompleta && (
        <section>
          <p>{entrada.nf}</p>
          <p>{entrada.id_fornecedor}</p>
        </section>
      )}
      <p>{entrada.tipo}</p>
      <p>{entrada.descricao}</p>
    </>
  );
};

export default Entrada;
