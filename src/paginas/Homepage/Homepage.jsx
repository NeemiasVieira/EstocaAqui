import { Navegacao } from "../../componentes/Navegacao/Navegacao";
import { Footer } from "../../componentes/Footer/Footer";
import Entrada from "../../componentes/Entrada/Entrada";

const Homepage = () => {
  return (
    <>
      <Navegacao />
      <h1>Bem vindo, Fulano!</h1>
      <section>
        <p>Últimas saídas:</p>

        <p>Últimas entradas:</p>
        <Entrada />
      </section>
      <button>Estoque</button>
      <button>Entradas</button>
      <button>Saídas</button>
      <Footer />
    </>
  );
};

export default Homepage;
