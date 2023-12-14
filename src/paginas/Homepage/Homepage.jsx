import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import Entrada from "../../componentes/Entrada/Entrada";
import Saida from "../../componentes/Saida/Saida";
import { EntradaService } from "../../serviços/API/modulos/EntradaService";
import { useEffect, useState } from "react";

const usuario = {
  nome: "Diogo",
  email: "dioguinho",
  outrasPropriedades: "desnecessárias",
};

const Homepage = () => {
  const [entradas, setEntrada] = useState();
  const [erro, setErro] = useState();

  const entradaService = new EntradaService(setEntrada, setErro);

  useEffect(() => {
    entradaService.getEntradas();
  }, []);

  return (
    <>
      <Navegacao />
      <h1>Bem vindo, {usuario.nome}</h1>
      <section>
        <p>Últimas saídas:</p>
        <Saida />

        <p>Últimas entradas:</p>
        {entradas &&
          entradas.map((entrada) => (
            <Entrada
              key={entrada.id}
              entrada={entrada}
              entradaCompleta={false}
            />
          ))}
      </section>
      <button>Estoque</button>
      <button>Entradas</button>
      <button>Saídas</button>
      <Footer />
    </>
  );
};

export default Homepage;
